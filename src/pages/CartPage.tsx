import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import QuantitySelector from '../components/ui/QuantitySelector';
import { useUser } from '../context/UserContext';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [discount, setDiscount] = useState(0);
  
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + shipping + tax - discount;
  
  const handleQuantityChange = (productId: string, quantity: number) => {
    updateQuantity(productId, quantity);
  };
  
  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };
  
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock coupon validation
    if (couponCode.toUpperCase() === 'DISCOUNT20') {
      setDiscount(subtotal * 0.2);
      setCouponError('');
    } else {
      setDiscount(0);
      setCouponError('Invalid coupon code');
    }
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/login?redirect=checkout');
    }
  };
  
  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-gray-400 mb-4">
                <ShoppingCart size={64} className="mx-auto" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link to="/products">
                <Button variant="primary" fullWidth>
                  Continue Shopping
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
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium">
                  Cart Items ({items.reduce((sum, item) => sum + item.quantity, 0)})
                </h2>
              </div>
              
              <ul>
                {items.map((item) => (
                  <li key={`${item.product.id}-${JSON.stringify(item.selectedOptions)}`} className="border-b border-gray-200 last:border-0">
                    <div className="flex flex-col sm:flex-row items-start p-6">
                      <div className="sm:w-20 sm:h-20 flex-shrink-0 bg-gray-100 rounded mb-4 sm:mb-0">
                        <Link to={`/product/${item.product.id}`}>
                          <img 
                            src={item.product.images[0]} 
                            alt={item.product.name} 
                            className="w-full h-full object-contain"
                          />
                        </Link>
                      </div>
                      
                      <div className="sm:ml-6 flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                          <div>
                            <Link 
                              to={`/product/${item.product.id}`}
                              className="text-lg font-medium text-gray-900 hover:text-blue-600"
                            >
                              {item.product.name}
                            </Link>
                            
                            {item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && (
                              <div className="mt-1 text-sm text-gray-600">
                                {Object.entries(item.selectedOptions).map(([key, value]) => (
                                  <span key={key} className="mr-4">
                                    {key}: {value}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-2 sm:mt-0 text-lg font-medium text-gray-900">
                            {formatPrice(
                              (item.product.discountedPrice || item.product.price) * item.quantity
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <QuantitySelector
                            quantity={item.quantity}
                            onChange={(quantity) => handleQuantityChange(item.product.id, quantity)}
                            min={1}
                            max={10}
                          />
                          
                          <button
                            onClick={() => handleRemoveItem(item.product.id)}
                            className="text-red-600 hover:text-red-800 flex items-center"
                          >
                            <Trash2 size={18} className="mr-1" />
                            <span className="text-sm hidden sm:inline">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="p-6 bg-gray-50 flex justify-between items-center">
                <Link to="/products" className="text-blue-600 hover:text-blue-800 flex items-center">
                  <span className="mr-1">Continue Shopping</span>
                </Link>
                
                <button 
                  onClick={() => clearCart()}
                  className="text-red-600 hover:text-red-800"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium">Order Summary</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900 font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">
                      {shipping === 0 ? 'Free' : formatPrice(shipping)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (7%)</span>
                    <span className="text-gray-900">{formatPrice(tax)}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-lg font-bold">{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Coupon Code */}
                <div className="mt-6">
                  <form onSubmit={handleApplyCoupon}>
                    <div className="flex">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Coupon Code"
                        className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Button 
                        type="submit" 
                        variant="secondary"
                        className="rounded-l-none"
                        disabled={!couponCode}
                      >
                        Apply
                      </Button>
                    </div>
                    {couponError && (
                      <p className="mt-1 text-red-600 text-sm">{couponError}</p>
                    )}
                    {discount > 0 && (
                      <p className="mt-1 text-green-600 text-sm">Coupon applied successfully!</p>
                    )}
                  </form>
                </div>
                
                <div className="mt-6">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                    onClick={handleCheckout}
                    rightIcon={<ArrowRight size={18} />}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;