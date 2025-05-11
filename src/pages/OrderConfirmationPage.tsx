import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const OrderConfirmationPage: React.FC = () => {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  const orderDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
              <p className="text-gray-600">
                Thank you for your purchase. Your order has been received and is being processed.
              </p>
            </div>
            
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-sm font-semibold text-gray-600 mb-2">ORDER INFORMATION</h2>
                  <p className="mb-1">
                    <span className="font-medium">Order Number:</span> {orderNumber}
                  </p>
                  <p className="mb-1">
                    <span className="font-medium">Date:</span> {orderDate}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span> <span className="text-green-600">Processing</span>
                  </p>
                </div>
                
                <div>
                  <h2 className="text-sm font-semibold text-gray-600 mb-2">SHIPPING INFORMATION</h2>
                  <p className="mb-1">
                    <span className="font-medium">Shipping Method:</span> Standard Shipping
                  </p>
                  <p className="mb-1">
                    <span className="font-medium">Estimated Delivery:</span> 3-5 Business Days
                  </p>
                  <p>
                    <span className="font-medium">Tracking Number:</span> <span className="text-gray-500">Will be emailed when shipped</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <ShoppingBag size={24} className="text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-blue-900 mb-2">
                    Next Steps
                  </h2>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>A confirmation email has been sent to your registered email address.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>You'll receive another email with tracking information once your order ships.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>You can check your order status anytime in your account dashboard.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/orders">
                <Button variant="outline" size="lg" leftIcon={<ShoppingBag size={18} />}>
                  View My Orders
                </Button>
              </Link>
              
              <Link to="/products">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight size={18} />}>
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;