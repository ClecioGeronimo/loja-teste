import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'laptops',
    name: 'Notebooks',
    description: 'Notebooks de alto desempenho para trabalho e jogos',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'components',
    name: 'Componentes',
    description: 'Peças e componentes para computadores',
    image: 'https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'peripherals',
    name: 'Periféricos',
    description: 'Teclados, mouses e outros acessórios',
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'networking',
    name: 'Redes',
    description: 'Roteadores, switches e equipamentos de rede',
    image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Notebook Gamer Pro X',
    description: 'Notebook gamer de alto desempenho com RTX 4080, 32GB RAM e SSD NVMe de 1TB. Possui tela QHD 165Hz e sistema de resfriamento premium.',
    price: 12499.99,
    discountedPrice: 11299.99,
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'laptops',
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 156,
    specifications: {
      'Processador': 'Intel Core i9-13900H',
      'Placa de Vídeo': 'NVIDIA RTX 4080 16GB',
      'Memória RAM': '32GB DDR5',
      'Armazenamento': 'SSD NVMe 1TB',
      'Tela': '15.6" QHD 165Hz'
    }
  },
  {
    id: '2',
    name: 'Teclado Mecânico Gamer',
    description: 'Teclado mecânico RGB com switches hot-swap, estrutura em alumínio e iluminação personalizável.',
    price: 799.99,
    images: [
      'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'peripherals',
    featured: true,
    inStock: true,
    rating: 4.6,
    reviews: 87,
    specifications: {
      'Switch': 'Cherry MX Red',
      'Keycaps': 'PBT Double-shot',
      'Conexão': 'USB-C',
      'Recursos': 'Hot-swap, RGB'
    }
  },
  {
    id: '3',
    name: 'Placa de Vídeo RTX 4070 Ti',
    description: 'Placa de vídeo de alto desempenho para jogos e criação de conteúdo com suporte a ray tracing e DLSS.',
    price: 3999.99,
    discountedPrice: 3749.99,
    images: [
      'https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'components',
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 210,
    specifications: {
      'Memória': '12GB GDDR6X',
      'Clock Boost': '2.61 GHz',
      'Ray Tracing': 'Sim',
      'DLSS': '3.0'
    }
  },
  {
    id: '4',
    name: 'Roteador Wi-Fi 6E',
    description: 'Roteador tri-band com suporte a Wi-Fi 6E, perfeito para jogos e streaming 4K.',
    price: 1499.99,
    images: [
      'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'networking',
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 189,
    specifications: {
      'Padrão Wi-Fi': 'Wi-Fi 6E',
      'Bandas': 'Tri-band',
      'Portas': '4x Gigabit LAN',
      'Cobertura': 'Até 230m²'
    }
  }
];

// Pedidos mockados para dashboard admin
export const orders = [
  {
    id: 'PED-001',
    customer: {
      name: 'João Silva',
      email: 'joao@exemplo.com'
    },
    date: '2024-02-28T10:30:00',
    status: 'completed',
    total: 12499.99,
    items: [
      {
        product: products[0],
        quantity: 1
      }
    ]
  },
  {
    id: 'PED-002',
    customer: {
      name: 'Maria Santos',
      email: 'maria@exemplo.com'
    },
    date: '2024-02-28T11:45:00',
    status: 'processing',
    total: 1599.98,
    items: [
      {
        product: products[1],
        quantity: 2
      }
    ]
  }
];

// Clientes mockados para dashboard admin
export const customers = [
  {
    id: 'CLI-001',
    name: 'João Silva',
    email: 'joao@exemplo.com',
    joinDate: '2024-01-15T00:00:00',
    orders: 5,
    totalSpent: 15599.95
  },
  {
    id: 'CLI-002',
    name: 'Maria Santos',
    email: 'maria@exemplo.com',
    joinDate: '2024-02-01T00:00:00',
    orders: 2,
    totalSpent: 1599.98
  }
];

// Dados analíticos mockados para dashboard admin
export const analytics = {
  revenue: {
    daily: [
      { date: '2024-02-22', value: 5299.99 },
      { date: '2024-02-23', value: 12499.99 },
      { date: '2024-02-24', value: 1599.98 },
      { date: '2024-02-25', value: 7999.97 },
      { date: '2024-02-26', value: 13299.98 },
      { date: '2024-02-27', value: 6599.99 },
      { date: '2024-02-28', value: 12499.99 }
    ],
    total: 59799.89,
    growth: 23.5
  },
  orders: {
    daily: [
      { date: '2024-02-22', value: 3 },
      { date: '2024-02-23', value: 5 },
      { date: '2024-02-24', value: 2 },
      { date: '2024-02-25', value: 4 },
      { date: '2024-02-26', value: 6 },
      { date: '2024-02-27', value: 3 },
      { date: '2024-02-28', value: 5 }
    ],
    total: 28,
    growth: 15.8
  },
  topProducts: [
    { name: 'Notebook Gamer Pro X', sales: 12, revenue: 137999.88 },
    { name: 'RTX 4070 Ti', sales: 8, revenue: 29999.92 },
    { name: 'Teclado Mecânico Gamer', sales: 15, revenue: 11999.85 }
  ],
  topCategories: [
    { name: 'Notebooks', sales: 12, revenue: 137999.88 },
    { name: 'Componentes', sales: 8, revenue: 29999.92 },
    { name: 'Periféricos', sales: 15, revenue: 11999.85 }
  ]
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const filterProducts = (options: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  search?: string;
  sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'newest';
}): Product[] => {
  return products.filter(product => {
    if (options.category && product.category !== options.category) return false;
    if (options.minPrice && product.price < options.minPrice) return false;
    if (options.maxPrice && product.price > options.maxPrice) return false;
    if (options.inStock === true && !product.inStock) return false;
    if (options.search && !product.name.toLowerCase().includes(options.search.toLowerCase()) && 
        !product.description.toLowerCase().includes(options.search.toLowerCase())) return false;
    
    return true;
  }).sort((a, b) => {
    if (!options.sortBy) return 0;
    
    switch (options.sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return parseInt(b.id) - parseInt(a.id);
      default:
        return 0;
    }
  });
};