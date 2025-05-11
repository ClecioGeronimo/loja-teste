export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  images: string[];
  category: string;
  featured: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
  specifications?: Record<string, string>;
  options?: {
    name: string;
    values: string[];
  }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOptions?: Record<string, string>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role?: 'user' | 'admin';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface FilterOptions {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'newest';
}

export interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  date: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  total: number;
  items: {
    product: Product;
    quantity: number;
  }[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  orders: number;
  totalSpent: number;
}

export interface Analytics {
  revenue: {
    daily: Array<{ date: string; value: number }>;
    total: number;
    growth: number;
  };
  orders: {
    daily: Array<{ date: string; value: number }>;
    total: number;
    growth: number;
  };
  topProducts: Array<{ name: string; sales: number; revenue: number }>;
  topCategories: Array<{ name: string; sales: number; revenue: number }>;
}