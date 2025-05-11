# 🗄️ Recomendações de Banco de Dados

Este documento descreve a estrutura e recomendações para o banco de dados da aplicação usando Supabase.

## 📊 Estrutura do Banco de Dados

### Tabelas Principais

```sql
-- Produtos
create table products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price decimal(10,2) not null,
  discounted_price decimal(10,2),
  category_id uuid references categories(id),
  images text[] not null default '{}',
  in_stock boolean default true,
  featured boolean default false,
  rating numeric(3,2) default 0,
  reviews_count integer default 0,
  specifications jsonb default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Categorias
create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  image text,
  created_at timestamptz default now()
);

-- Pedidos
create table orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  status text not null,
  total decimal(10,2) not null,
  shipping_address jsonb not null,
  payment_intent_id text,
  payment_status text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Itens do Pedido
create table order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id),
  product_id uuid references products(id),
  quantity integer not null,
  price decimal(10,2) not null,
  created_at timestamptz default now()
);

-- Lista de Desejos
create table wishlist_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  product_id uuid references products(id),
  created_at timestamptz default now(),
  unique(user_id, product_id)
);

-- Avaliações
create table reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  product_id uuid references products(id),
  rating integer not null check (rating between 1 and 5),
  comment text,
  created_at timestamptz default now(),
  unique(user_id, product_id)
);
```

### Políticas de Segurança (RLS)

```sql
-- Produtos
alter table products enable row level security;

create policy "Produtos visíveis para todos"
  on products for select
  using (true);

create policy "Apenas admins podem modificar produtos"
  on products for all
  using (auth.jwt() ->> 'role' = 'admin');

-- Pedidos
alter table orders enable row level security;

create policy "Usuários veem seus próprios pedidos"
  on orders for select
  using (auth.uid() = user_id);

create policy "Usuários criam seus próprios pedidos"
  on orders for insert
  with check (auth.uid() = user_id);

-- Lista de Desejos
alter table wishlist_items enable row level security;

create policy "Usuários gerenciam sua própria lista"
  on wishlist_items for all
  using (auth.uid() = user_id);
```

## 🔑 Autenticação

O Supabase fornece autenticação integrada. Utilize o esquema `auth.users` para gerenciar usuários.

### Perfis de Usuário

```sql
create table profiles (
  id uuid references auth.users primary key,
  name text,
  avatar_url text,
  role text default 'user',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Criar perfil automaticamente após signup
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## 📈 Índices Recomendados

```sql
-- Produtos
create index products_category_id_idx on products(category_id);
create index products_price_idx on products(price);
create index products_created_at_idx on products(created_at);

-- Pedidos
create index orders_user_id_idx on orders(user_id);
create index orders_status_idx on orders(status);
create index orders_created_at_idx on orders(created_at);

-- Itens do Pedido
create index order_items_order_id_idx on order_items(order_id);
create index order_items_product_id_idx on order_items(product_id);
```

## 🔄 Funções e Triggers

```sql
-- Atualizar média de avaliações
create function update_product_rating()
returns trigger as $$
begin
  update products
  set 
    rating = (
      select avg(rating)::numeric(3,2)
      from reviews
      where product_id = new.product_id
    ),
    reviews_count = (
      select count(*)
      from reviews
      where product_id = new.product_id
    )
  where id = new.product_id;
  return new;
end;
$$ language plpgsql security definer;

create trigger on_review_change
  after insert or update or delete on reviews
  for each row execute procedure update_product_rating();
```

## 🛡️ Boas Práticas

1. **Segurança**
   - Sempre habilite RLS para novas tabelas
   - Use políticas específicas por função
   - Nunca exponha senhas ou dados sensíveis

2. **Performance**
   - Crie índices para campos frequentemente consultados
   - Use tipos apropriados para cada coluna
   - Implemente paginação para listas grandes

3. **Integridade**
   - Use constraints para garantir dados válidos
   - Implemente foreign keys para relacionamentos
   - Mantenha timestamps de criação/atualização

4. **Backups**
   - Configure backups diários
   - Teste a restauração periodicamente
   - Mantenha múltiplas cópias

## 🔌 Integração com a Aplicação

1. Instale as dependências:
```bash
npm install @supabase/supabase-js
```

2. Configure as variáveis de ambiente:
```env
VITE_SUPABASE_URL=sua_url
VITE_SUPABASE_ANON_KEY=sua_chave
```

3. Inicialize o cliente:
```typescript
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
```

## 📝 Migrations

Mantenha todas as migrations em `/supabase/migrations` seguindo o padrão:

```
/supabase/migrations/
  ├── 00000000000000_initial.sql
  ├── 20240301000000_add_products.sql
  ├── 20240302000000_add_orders.sql
  └── ...
```

## 🔍 Monitoramento

1. Configure alertas para:
   - Uso de CPU/Memória
   - Tempo de resposta
   - Erros de consulta
   - Espaço em disco

2. Monitore métricas importantes:
   - Queries por segundo
   - Tempo médio de resposta
   - Taxa de cache hits
   - Conexões ativas

## 🚀 Escalabilidade

1. **Otimizações**
   - Use materialized views para relatórios
   - Implemente caching quando apropriado
   - Otimize consultas frequentes

2. **Particionamento**
   - Considere particionar tabelas grandes
   - Use particionamento por data para histórico
   - Mantenha índices eficientes

## 🐛 Troubleshooting

1. **Problemas Comuns**
   - Conexões pendentes
   - Queries lentas
   - Deadlocks
   - Fragmentação

2. **Soluções**
   - Analise explain plans
   - Monitore logs de erro
   - Use connection pooling
   - Mantenha índices otimizados