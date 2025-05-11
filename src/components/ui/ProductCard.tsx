import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { useWishlist } from '../../context/WishlistContext';
import Button from './Button';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative pt-[100%] bg-gray-50">
          <img
            src={product.images[0]}
            alt={product.name}
            className="absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {product.discountedPrice && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
            </div>
          )}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:bg-white"
            aria-label={inWishlist ? "Remover da lista de desejos" : "Adicionar à lista de desejos"}
          >
            <Heart
              size={20}
              className={`transition-colors duration-300 ${inWishlist ? "fill-red-500 text-red-500" : "text-gray-400"}`}
            />
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-xs text-gray-500">
                ({product.reviews})
              </span>
            </div>
          </div>
          <h3 className="text-gray-800 font-medium text-lg mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center justify-between mb-3">
            <div>
              {product.discountedPrice ? (
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-900">
                    {formatPrice(product.discountedPrice)}
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {formatPrice(product.price)}
                  </span>
                </div>
              ) : (
                <span className="text-lg font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
          </div>
          <Button
            onClick={handleAddToCart}
            variant="primary"
            size="sm"
            fullWidth
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;