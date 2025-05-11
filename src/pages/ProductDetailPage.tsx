import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  ShoppingCart, 
  ArrowLeft,
  Check, 
  Star,
  Share2
} from 'lucide-react';
import { getProductById } from '../data/products';
import Button from '../components/ui/Button';
import QuantitySelector from '../components/ui/QuantitySelector';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ui/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const product = productId ? getProductById(productId) : undefined;
  
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(
    product?.options?.reduce((acc, option) => ({
      ...acc,
      [option.name]: option.values[0]
    }), {}) || {}
  );
  
  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
        <p className="text-gray-600 mb-8">O produto que você está procurando não existe ou foi removido.</p>
        <Button variant="primary" onClick={() => navigate('/products')}>
          Voltar para Produtos
        </Button>
      </div>
    );
  }
  
  const inWishlist = isInWishlist(product.id);
  
  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedOptions);
  };
  
  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions({
      ...selectedOptions,
      [optionName]: value
    });
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };
  
  // Obter produtos similares (mesma categoria)
  const similarProducts = product ? getProductById(product.id) 
    ? Array.from({ length: 4 }).map(() => getProductById(product.id === '1' ? '2' : '1')!) 
    : [] 
    : [];
  
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Navegação */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={16} className="mr-2" />
            Voltar
          </button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Imagens do Produto */}
          <div className="lg:w-1/2">
            <div className="mb-4 aspect-square overflow-hidden bg-gray-100 rounded-lg">
              <img 
                src={product.images[activeImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-20 h-20 flex-shrink-0 rounded overflow-hidden ${
                      index === activeImageIndex ? 'ring-2 ring-blue-500' : 'ring-1 ring-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${product.name} - Visualização ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Informações do Produto */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} 
                      className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating.toFixed(1)} ({product.reviews} avaliações)
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                {product.discountedPrice ? (
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900 mr-3">
                      {formatPrice(product.discountedPrice)}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(product.price)}
                    </span>
                    <span className="ml-3 bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                      Economize {formatPrice(product.price - product.discountedPrice)}
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center">
                  <div className={`flex items-center ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? (
                      <>
                        <Check size={18} className="mr-1" />
                        <span>Em Estoque</span>
                      </>
                    ) : (
                      <span>Fora de Estoque</span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Opções do Produto */}
              {product.options && product.options.length > 0 && (
                <div className="space-y-6 mb-6">
                  {product.options.map(option => (
                    <div key={option.name}>
                      <h3 className="text-sm font-medium text-gray-900 mb-2">
                        {option.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {option.values.map(value => (
                          <button
                            key={value}
                            onClick={() => handleOptionChange(option.name, value)}
                            className={`px-3 py-2 border rounded-md text-sm ${
                              selectedOptions[option.name] === value
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Quantidade e Adicionar ao Carrinho */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantidade
                  </label>
                  <QuantitySelector
                    quantity={quantity}
                    onChange={setQuantity}
                    min={1}
                    max={10}
                  />
                </div>
                
                <div className="flex-1 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    leftIcon={<ShoppingCart size={18} />}
                    onClick={handleAddToCart}
                    className="flex-1"
                    disabled={!product.inStock}
                  >
                    Adicionar ao Carrinho
                  </Button>
                  
                  <Button
                    variant={inWishlist ? 'secondary' : 'outline'}
                    size="lg"
                    leftIcon={<Heart size={18} className={inWishlist ? 'fill-white' : ''} />}
                    onClick={handleWishlistToggle}
                  >
                    {inWishlist ? 'Salvo' : 'Salvar'}
                  </Button>
                </div>
              </div>
              
              {/* Compartilhar */}
              <div className="flex items-center mt-6">
                <span className="text-sm text-gray-600 mr-3">Compartilhar:</span>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Especificações do Produto */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-xl font-bold mb-4">Especificações</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600 w-1/2">{key}</span>
                      <span className="text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Produtos Similares */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Você Também Pode Gostar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;