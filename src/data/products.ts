import { Product, Category } from '../types';

export const categories: Category[] = [
  // Hardware
  {
    id: 'computers',
    name: 'Computadores',
    description: 'Desktops, All-in-One e Workstations',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'notebooks',
    name: 'Notebooks',
    description: 'Notebooks, Ultrabooks e Notebooks Gamer',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'tablets',
    name: 'Tablets',
    description: 'Tablets Android, iPads e Windows',
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  // Componentes
  {
    id: 'processors',
    name: 'Processadores',
    description: 'Intel e AMD para Desktop e Servidor',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'video-cards',
    name: 'Placas de Vídeo',
    description: 'NVIDIA e AMD para Gaming e Trabalho',
    image: 'https://images.pexels.com/photos/5499399/pexels-photo-5499399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'memory',
    name: 'Memória RAM',
    description: 'DDR4, DDR5 e Memória para Notebook',
    image: 'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'storage',
    name: 'Armazenamento',
    description: 'SSDs, HDs e Unidades Externas',
    image: 'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'motherboards',
    name: 'Placas-mãe',
    description: 'Para Intel e AMD, diversos formatos',
    image: 'https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'power-supplies',
    name: 'Fontes',
    description: 'Fontes com certificação 80 Plus',
    image: 'https://images.pexels.com/photos/5499527/pexels-photo-5499527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'cases',
    name: 'Gabinetes',
    description: 'Gabinetes para Gaming e Uso Geral',
    image: 'https://images.pexels.com/photos/5499403/pexels-photo-5499403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  // Periféricos
  {
    id: 'keyboards',
    name: 'Teclados',
    description: 'Mecânicos, Membrana e Sem Fio',
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'mice',
    name: 'Mouses',
    description: 'Mouses para Gaming e Uso Profissional',
    image: 'https://images.pexels.com/photos/5499390/pexels-photo-5499390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'monitors',
    name: 'Monitores',
    description: 'Monitores Gaming e Profissionais',
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'headsets',
    name: 'Headsets',
    description: 'Headsets Gaming e Profissionais',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  // Impressão
  {
    id: 'printers',
    name: 'Impressoras',
    description: 'Impressoras Laser e Jato de Tinta',
    image: 'https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  // Redes
  {
    id: 'networking',
    name: 'Redes',
    description: 'Roteadores, Switches e Acessórios',
    image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Sample featured products
const products: Product[] = [
  {
    id: '1',
    name: 'Notebook Gamer Pro',
    description: 'Notebook gamer com RTX 4080 e Intel i9',
    price: 12999.99,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'notebooks',
    stock: 10,
    featured: true
  },
  {
    id: '2',
    name: 'Monitor Gaming 240Hz',
    description: 'Monitor gaming de alta performance',
    price: 2499.99,
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'monitors',
    stock: 15,
    featured: true
  },
  {
    id: '3',
    name: 'Teclado Mecânico RGB',
    description: 'Teclado mecânico com switches Cherry MX',
    price: 599.99,
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'keyboards',
    stock: 20,
    featured: true
  },
  {
    id: '4',
    name: 'Placa de Vídeo RTX 4090',
    description: 'GPU topo de linha para gaming e trabalho',
    price: 12999.99,
    image: 'https://images.pexels.com/photos/5499399/pexels-photo-5499399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'video-cards',
    stock: 5,
    featured: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};