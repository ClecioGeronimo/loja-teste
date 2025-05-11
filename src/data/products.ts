import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'laptops',
    name: 'Laptops',
    description: 'High-performance laptops for work and gaming',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'components',
    name: 'Components',
    description: 'PC parts and hardware components',
    image: 'https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'peripherals',
    name: 'Peripherals',
    description: 'Keyboards, mice, and other accessories',
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'networking',
    name: 'Networking',
    description: 'Routers, switches, and networking equipment',
    image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Gaming Laptop Pro X',
    description: 'High-performance gaming laptop with RTX 4080, 32GB RAM, and 1TB NVMe SSD. Features a 165Hz QHD display and premium cooling system.',
    price: 2499.99,
    discountedPrice: 2299.99,
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
      'Processor': 'Intel Core i9-13900H',
      'Graphics': 'NVIDIA RTX 4080 16GB',
      'RAM': '32GB DDR5',
      'Storage': '1TB NVMe SSD',
      'Display': '15.6" QHD 165Hz'
    }
  },
  {
    id: '2',
    name: 'Mechanical Gaming Keyboard',
    description: 'RGB mechanical keyboard with hot-swappable switches, aluminum frame, and customizable backlighting.',
    price: 159.99,
    images: [
      'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'peripherals',
    featured: true,
    inStock: true,
    rating: 4.6,
    reviews: 87,
    specifications: {
      'Switch Type': 'Cherry MX Red',
      'Keycaps': 'PBT Double-shot',
      'Connection': 'USB-C',
      'Features': 'Hot-swappable, RGB'
    }
  },
  {
    id: '3',
    name: 'RTX 4070 Ti Graphics Card',
    description: 'High-performance graphics card for gaming and content creation with ray tracing and DLSS support.',
    price: 799.99,
    discountedPrice: 749.99,
    images: [
      'https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'components',
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 210,
    specifications: {
      'VRAM': '12GB GDDR6X',
      'Boost Clock': '2.61 GHz',
      'Ray Tracing': 'Yes',
      'DLSS': '3.0'
    }
  },
  {
    id: '4',
    name: 'Wi-Fi 6E Router',
    description: 'High-speed tri-band router with Wi-Fi 6E support, perfect for gaming and 4K streaming.',
    price: 299.99,
    images: [
      'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'networking',
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 189,
    specifications: {
      'Wi-Fi Standard': 'Wi-Fi 6E',
      'Bands': 'Tri-band',
      'Ports': '4x Gigabit LAN',
      'Coverage': 'Up to 2,500 sq ft'
    }
  }
];

// Mock orders for admin dashboard
export const orders = [
  {
    id: 'ORD-001',
    customer: {
      name: 'John Doe',
      email: 'john@example.com'
    },
    date: '2024-02-28T10:30:00',
    status: 'completed',
    total: 2499.99,
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
      name: 'Jane Smith',
      email: 'jane@example.com'
    },
    date: '2024-02-28T11:45:00',
    status: 'processing',
    total: 959.98,
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
    name: 'John Doe',
    email: 'john@example.com',
    joinDate: '2024-01-15T00:00:00',
    orders: 5,
    totalSpent: 4599.95
  },
  {
    id: 'CUST-002',
    name: 'Jane Smith',
    email: 'jane@example.com',
    joinDate: '2024-02-01T00:00:00',
    orders: 2,
    totalSpent: 959.98
  }
];

// Mock analytics data for admin dashboard
export const analytics = {
  revenue: {
    daily: [
      { date: '2024-02-22', value: 1299.99 },
      { date: '2024-02-23', value: 2499.99 },
      { date: '2024-02-24', value: 959.98 },
      { date: '2024-02-25', value: 1799.97 },
      { date: '2024-02-26', value: 3299.98 },
      { date: '2024-02-27', value: 1599.99 },
      { date: '2024-02-28', value: 2499.99 }
    ],
    total: 13959.89,
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
    { name: 'Gaming Laptop Pro X', sales: 12, revenue: 27599.88 },
    { name: 'RTX 4070 Ti Graphics Card', sales: 8, revenue: 5999.92 },
    { name: 'Mechanical Gaming Keyboard', sales: 15, revenue: 2399.85 }
  ],
  topCategories: [
    { name: 'Laptops', sales: 12, revenue: 27599.88 },
    { name: 'Components', sales: 8, revenue: 5999.92 },
    { name: 'Peripherals', sales: 15, revenue: 2399.85 }
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