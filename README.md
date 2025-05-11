# 🛍️ Loja Virtual

Uma plataforma de e-commerce moderna e completa construída com React, TypeScript e Tailwind CSS.

## ✨ Funcionalidades

- 🛒 Carrinho de compras
- 💖 Lista de desejos
- 🔐 Autenticação de usuários
- 🎨 Design responsivo
- 💳 Integração com Mercado Pago
- 📊 Painel administrativo
- 🔍 Busca e filtros avançados
- 📱 PWA (Progressive Web App)

## 🚀 Tecnologias

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Lucide Icons
- Nivo Charts
- Mercado Pago SDK

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/loja-virtual.git

# Entre na pasta do projeto
cd loja-virtual

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_MP_PUBLIC_KEY=SUA_CHAVE_PUBLICA
VITE_MP_ACCESS_TOKEN=SEU_ACCESS_TOKEN
```

### Mercado Pago

1. Crie uma conta no [Mercado Pago](https://www.mercadopago.com.br)
2. Obtenha suas credenciais no [Painel do Desenvolvedor](https://www.mercadopago.com.br/developers)
3. Configure as credenciais no painel administrativo

## 👥 Contas Demo

### Usuário Normal
- Email: demo@exemplo.com
- Senha: senha123

### Administrador
- Email: admin@exemplo.com
- Senha: admin123

## 📱 Layout Responsivo

- Desktop: 1920px, 1440px
- Tablet: 768px
- Mobile: 375px

## 🛠️ Scripts

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera build de produção
- `npm run preview`: Visualiza build local
- `npm run analyze`: Analisa o bundle

## 📊 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── context/       # Contextos React
├── pages/         # Páginas da aplicação
├── data/          # Dados mockados
├── types/         # Definições TypeScript
└── utils/         # Funções utilitárias
```

## 🌟 Recursos

- Autenticação de usuários
- Gestão de produtos
- Carrinho de compras
- Lista de desejos
- Checkout seguro
- Painel administrativo
- Relatórios e análises
- Gestão de pedidos
- Integração de pagamentos

## 📈 Painel Administrativo

- Dashboard com métricas
- Gestão de produtos
- Gestão de pedidos
- Gestão de clientes
- Configurações de pagamento
- Relatórios de vendas

## 🔒 Segurança

- Autenticação segura
- Proteção de rotas
- Validação de formulários
- Sanitização de dados
- Controle de acesso baseado em funções

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.