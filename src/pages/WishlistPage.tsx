import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

const WishlistPage: React.FC = () => {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const handleAddToCart = (productId: string) => {
    const product = items.find(item => item.id === productId);
    if (product) {
      addToCart(product, 1);
    }
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-gray-400 mb-4">
                <Heart size={64} className="mx-auto" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h1>
              <p className="text-gray-600 mb-8">
                Save items you love to your wishlist so you can find them easily later.
              </p>
              <Link to="/products">
                <Button variant="primary" fullWidth>
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Wishlist</h1>
          <Button 
            variant="outline" 
            onClick={clearWishlist}
            className="text-red-600 border-red-600 hover:bg-red-50"
          >
            Clear Wishlist
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {items.map((product) => (
              <li key={product.id} className="p-6">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-24 sm:h-24 flex-shrink-0 bg-gray-100 rounded mb-4 sm:mb-0">
                    <Link to={`/product/${product.id}`}>
                      <img 
                        src={product.images[0]} 
                        alt={product.name} 
                        className="w-full h-full object-contain"
                      />
                    </Link>
                  </div>
                  
                  <div className="sm:ml-6 flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                      <div>
                        <Link 
                          to={`/product/${product.id}`}
                          className="text-lg font-medium text-gray-900 hover:text-blue-600"
                        >
                          {product.name}
                        </Link>
                        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                      
                      <div className="mt-2 sm:mt-0">
                        {product.discountedPrice ? (
                          <div className="flex items-center">
                            <span className="text-lg font-bold text-gray-900">
                              {formatPrice(product.discountedPrice)}
                            </span>
                            <span className="ml-2 text-sm text-gray-500 line-through">
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
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                      <div className={`flex items-center ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                        <span className="text-sm">
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFromWishlist(product.id)}
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          Remove
                        </Button>
                        
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => handleAddToCart(product.id)}
                          leftIcon={<ShoppingCart size={16} />}
                          disabled={!product.inStock}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/products">
            <Button variant="outline">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;