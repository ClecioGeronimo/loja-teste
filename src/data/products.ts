import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'computadores',
    name: 'Computadores',
    description: 'Desktops, All-in-Ones e Workstations',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'notebooks',
    name: 'Notebooks',
    description: 'Notebooks para trabalho, estudo e jogos',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'hardware',
    name: 'Hardware',
    description: 'Processadores, Placas-mãe, Memória RAM e mais',
    image: 'https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'placas-video',
    name: 'Placas de Vídeo',
    description: 'GPUs para jogos e trabalho profissional',
    image: 'https://images.pexels.com/photos/5499837/pexels-photo-5499837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'armazenamento',
    name: 'Armazenamento',
    description: 'SSDs, HDDs e Unidades Externas',
    image: 'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'monitores',
    name: 'Monitores',
    description: 'Monitores Gaming e Profissionais',
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'perifericos',
    name: 'Periféricos',
    description: 'Teclados, Mouses, Headsets e mais',
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'redes',
    name: 'Redes',
    description: 'Roteadores, Switches e Equipamentos de Rede',
    image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'software',
    name: 'Software',
    description: 'Sistemas Operacionais, Antivírus e Aplicativos',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'gamer',
    name: 'Gamer',
    description: 'Produtos especiais para gamers',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Notebook Gamer Pro X',
    description: 'Notebook gamer de alto desempenho com RTX 4080, 32GB RAM e SSD NVMe de 1TB. Possui tela QHD de 165Hz e sistema de resfriamento premium.',
    price: 12499.99,
    discountedPrice: 11999.99,
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'notebooks',
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
    category: 'perifericos',
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
    price: 5999.99,
    discountedPrice: 5499.99,
    images: [
      'https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'placas-video',
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 210,
    specifications: {
      'VRAM': '12GB GDDR6X',
      'Clock Boost': '2.61 GHz',
      'Ray Tracing': 'Sim',
      'DLSS': '3.0'
    }
  },
  {
    id: '4',
    name: 'Roteador Wi-Fi 6E',
    description: 'Roteador tri-band com suporte a Wi-Fi 6E, perfeito para gaming e streaming em 4K.',
    price: 1499.99,
    images: [
      'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'redes',
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

// Mock orders for admin dashboard
export const orders = [
  {
    id: 'ORD-001',
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
    id: 'ORD-002',
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

// Mock customers for admin dashboard
export const customers = [
  {
    id: 'CUST-001',
    name: 'João Silva',
    email: 'joao@exemplo.com',
    joinDate: '2024-01-15T00:00:00',
    orders: 5,
    totalSpent: 15999.95
  },
  {
    id: 'CUST-002',
    name: 'Maria Santos',
    email: 'maria@exemplo.com',
    joinDate: '2024-02-01T00:00:00',
    orders: 2,
    totalSpent: 1599.98
  }
];

// Mock analytics data for admin dashboard
export const analytics = {
  revenue: {
    daily: [
      { date: '2024-02-22', value: 5999.99 },
      { date: '2024-02-23', value: 12499.99 },
      { date: '2024-02-24', value: 1599.98 },
      { date: '2024-02-25', value: 4499.97 },
      { date: '2024-02-26', value: 8999.98 },
      { date: '2024-02-27', value: 3999.99 },
      { date: '2024-02-28', value: 6499.99 }
    ],
    total: 44099.89,
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
    { name: 'Notebook Gamer Pro X', sales: 12, revenue: 149999.88 },
    { name: 'RTX 4070 Ti', sales: 8, revenue: 43999.92 },
    { name: 'Teclado Mecânico Gamer', sales: 15, revenue: 11999.85 }
  ],
  topCategories: [
    { name: 'Notebooks', sales: 12, revenue: 149999.88 },
    { name: 'Placas de Vídeo', sales: 8, revenue: 43999.92 },
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
  sortBy?: 'preco-asc' | 'preco-desc' | 'avaliacao' | 'novos';
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
      case 'preco-asc':
        return a.price - b.price;
      case 'preco-desc':
        return b.price - a.price;
      case 'avaliacao':
        return b.rating - a.rating;
      case 'novos':
        return parseInt(b.id) - parseInt(a.id);
      default:
        return 0;
    }
  });
};