import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'laptops',
    name: 'Notebooks',
    description: 'Notebooks de alto desempenho para trabalho e jogos',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'desktops',
    name: 'Computadores',
    description: 'PCs montados e All-in-Ones',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'components',
    name: 'Componentes',
    description: 'Peças e componentes para computadores',
    image: 'https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'storage',
    name: 'Armazenamento',
    description: 'SSDs, HDs e armazenamento externo',
    image: 'https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'peripherals',
    name: 'Periféricos',
    description: 'Teclados, mouses e outros acessórios',
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'monitors',
    name: 'Monitores',
    description: 'Monitores para jogos e trabalho',
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'networking',
    name: 'Redes',
    description: 'Roteadores, switches e equipamentos de rede',
    image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'software',
    name: 'Software',
    description: 'Sistemas operacionais e programas',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Acessórios e equipamentos para jogos',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'office',
    name: 'Escritório',
    description: 'Equipamentos para escritório e home office',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Sample featured products data
const products: Product[] = [
  {
    id: '1',
    name: 'Notebook Pro X',
    description: 'Notebook de última geração para profissionais',
    price: 4999.99,
    category: 'laptops',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stock: 10,
    featured: true
  },
  {
    id: '2',
    name: 'Desktop Gamer Elite',
    description: 'PC Gamer de alto desempenho',
    price: 8999.99,
    category: 'desktops',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stock: 5,
    featured: true
  },
  {
    id: '3',
    name: 'Monitor Ultra Wide',
    description: 'Monitor curvo de 34 polegadas',
    price: 2999.99,
    category: 'monitors',
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stock: 15,
    featured: true
  },
  {
    id: '4',
    name: 'Teclado Mecânico RGB',
    description: 'Teclado mecânico com iluminação RGB',
    price: 499.99,
    category: 'peripherals',
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stock: 20,
    featured: true
  }
];

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}