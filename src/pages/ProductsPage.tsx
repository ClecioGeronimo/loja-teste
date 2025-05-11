import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { 
  Filter, 
  SortDesc, 
  X, 
  ChevronDown, 
  ChevronUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { filterProducts, products, categories } from '../data/products';
import { Product, FilterOptions } from '../types';

const PRODUCTS_PER_PAGE = 20; // 5 produtos por linha * 4 linhas = 20 produtos por página

const ProductsPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    category: categoryId,
    inStock: true
  });
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [showFilters, setShowFilters] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>('category');
  const [currentPage, setCurrentPage] = useState(1);
  
  const categoryName = categoryId 
    ? categories.find(c => c.id === categoryId)?.name || 'Produtos'
    : 'Todos os Produtos';
  
  // Inicializar filtros quando a categoria muda
  useEffect(() => {
    setFilterOptions(prev => ({
      ...prev,
      category: categoryId
    }));
    setCurrentPage(1); // Resetar para primeira página quando mudar categoria
  }, [categoryId]);
  
  // Aplicar filtros
  useEffect(() => {
    const filtered = filterProducts({
      ...filterOptions,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      search: searchQuery
    });
    setFilteredProducts(filtered);
    setCurrentPage(1); // Resetar para primeira página quando mudar filtros
  }, [filterOptions, priceRange, searchQuery]);
  
  // Calcular faixa de preço baseado em todos os produtos
  useEffect(() => {
    if (products.length > 0) {
      const prices = products.map(p => p.price);
      const minPrice = Math.floor(Math.min(...prices));
      const maxPrice = Math.ceil(Math.max(...prices));
      setPriceRange([minPrice, maxPrice]);
    }
  }, []);
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOptions({
      ...filterOptions,
      sortBy: e.target.value as any
    });
  };
  
  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = parseInt(value, 10);
    if (isNaN(numValue)) return;
    
    if (type === 'min') {
      setPriceRange([numValue, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], numValue]);
    }
  };
  
  const handleInStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOptions({
      ...filterOptions,
      inStock: e.target.checked
    });
  };
  
  const clearFilters = () => {
    const prices = products.map(p => p.price);
    const minPrice = Math.floor(Math.min(...prices));
    const maxPrice = Math.ceil(Math.max(...prices));
    
    setPriceRange([minPrice, maxPrice]);
    setFilterOptions({
      category: categoryId,
      inStock: true
    });
    setCurrentPage(1);
  };

  // Paginação
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="pt-20 min-h-screen">
      {/* Cabeçalho */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">
            {searchQuery ? `Busca: "${searchQuery}"` : categoryName}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filtros - Toggle Mobile */}
          <div className="md:hidden mb-4">
            <Button 
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              leftIcon={<Filter size={16} />}
              fullWidth
            >
              {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
            </Button>
          </div>
          
          {/* Barra Lateral de Filtros */}
          <div className={`md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Filtros</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Limpar Tudo
                </button>
              </div>
              
              {/* Categorias */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <button
                  className="flex items-center justify-between w-full font-medium"
                  onClick={() => toggleSection('category')}
                >
                  Categorias
                  {expandedSection === 'category' ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                
                {expandedSection === 'category' && (
                  <div className="mt-3 pl-2 space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="all"
                        name="category"
                        value=""
                        checked={!filterOptions.category}
                        onChange={() => setFilterOptions({ ...filterOptions, category: undefined })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="all" className="ml-2 text-sm text-gray-700">
                        Todos os Produtos
                      </label>
                    </div>
                    
                    {categories.map(category => (
                      <div key={category.id} className="flex items-center">
                        <input
                          type="radio"
                          id={category.id}
                          name="category"
                          value={category.id}
                          checked={filterOptions.category === category.id}
                          onChange={() => setFilterOptions({ ...filterOptions, category: category.id })}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={category.id} className="ml-2 text-sm text-gray-700">
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Faixa de Preço */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <button
                  className="flex items-center justify-between w-full font-medium"
                  onClick={() => toggleSection('price')}
                >
                  Faixa de Preço
                  {expandedSection === 'price' ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                
                {expandedSection === 'price' && (
                  <div className="mt-3">
                    <div className="flex items-center space-x-4">
                      <div>
                        <label htmlFor="min-price" className="block text-sm text-gray-700 mb-1">
                          Mínimo (R$)
                        </label>
                        <input
                          type="number"
                          id="min-price"
                          min="0"
                          value={priceRange[0]}
                          onChange={(e) => handlePriceChange('min', e.target.value)}
                          className="w-full border border-gray-300 rounded-md text-sm p-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="max-price" className="block text-sm text-gray-700 mb-1">
                          Máximo (R$)
                        </label>
                        <input
                          type="number"
                          id="max-price"
                          min="0"
                          value={priceRange[1]}
                          onChange={(e) => handlePriceChange('max', e.target.value)}
                          className="w-full border border-gray-300 rounded-md text-sm p-2"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Disponibilidade */}
              <div className="mb-6">
                <button
                  className="flex items-center justify-between w-full font-medium"
                  onClick={() => toggleSection('availability')}
                >
                  Disponibilidade
                  {expandedSection === 'availability' ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                
                {expandedSection === 'availability' && (
                  <div className="mt-3 pl-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="in-stock"
                        checked={!!filterOptions.inStock}
                        onChange={handleInStockChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="in-stock" className="ml-2 text-sm text-gray-700">
                        Apenas Em Estoque
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Grade de Produtos */}
          <div className="flex-grow">
            {/* Opções de Ordenação */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-600">
                Mostrando {Math.min(startIndex + 1, filteredProducts.length)}-{Math.min(endIndex, filteredProducts.length)} de {filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'}
              </div>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="text-sm mr-2 hidden sm:inline">
                  Ordenar por:
                </label>
                <select
                  id="sort"
                  value={filterOptions.sortBy || ''}
                  onChange={handleSortChange}
                  className="border border-gray-300 rounded-md text-sm py-2 px-3 bg-white"
                >
                  <option value="">Destaque</option>
                  <option value="preco-asc">Preço: Menor para Maior</option>
                  <option value="preco-desc">Preço: Maior para Menor</option>
                  <option value="avaliacao">Avaliação dos Clientes</option>
                  <option value="novos">Mais Recentes</option>
                </select>
              </div>
            </div>
            
            {/* Produtos */}
            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {currentProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Paginação */}
                {totalPages > 1 && (
                  <div className="mt-8 flex justify-center items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft size={16} />
                    </Button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "primary" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(page)}
                        className="min-w-[40px]"
                      >
                        {page}
                      </Button>
                    ))}
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">😢</div>
                <h3 className="text-xl font-medium mb-2">Nenhum produto encontrado</h3>
                <p className="text-gray-600 mb-6">
                  Tente ajustar seus filtros ou critérios de busca
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;