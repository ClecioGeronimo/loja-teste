import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const CheckoutPage: React.FC = () => {
  const { items, subtotal, clearCart } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: user?.name.split(' ')[0] || '',
    lastName: user?.name.split(' ').slice(1).join(' ') || '',
    email: user?.email || '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [activeSection, setActiveSection] = useState<'shipping' | 'payment'>('shipping');
  const [isLoading, setIsLoading] = useState(false);
  
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + shipping + tax;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is being edited
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (activeSection === 'shipping') {
      if (!formData.firstName.trim()) errors.firstName = 'First name is required';
      if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
      if (!formData.email.trim()) errors.email = 'Email is required';
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = 'Email is invalid';
      if (!formData.address.trim()) errors.address = 'Address is required';
      if (!formData.city.trim()) errors.city = 'City is required';
      if (!formData.state.trim()) errors.state = 'State is required';
      if (!formData.zipCode.trim()) errors.zipCode = 'ZIP code is required';
      
      if (Object.keys(errors).length === 0) {
        setActiveSection('payment');
        return false;
      }
    } else {
      if (!formData.cardName.trim()) errors.cardName = 'Name on card is required';
      if (!formData.cardNumber.trim()) errors.cardNumber = 'Card number is required';
      if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        errors.cardNumber = 'Card number must be 16 digits';
      }
      if (!formData.expDate.trim()) errors.expDate = 'Expiration date is required';
      if (!/^\d{2}\/\d{2}$/.test(formData.expDate)) {
        errors.expDate = 'Use format MM/YY';
      }
      if (!formData.cvv.trim()) errors.cvv = 'CVV is required';
      if (!/^\d{3,4}$/.test(formData.cvv)) {
        errors.cvv = 'CVV must be 3 or 4 digits';
      }
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Process payment
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        clearCart();
        navigate('/order-confirmation');
      }, 2000);
    }
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div 
                  className="flex justify-between items-center p-6 cursor-pointer border-b border-gray-200"
                  onClick={() => setActiveSection('shipping')}
                >
                  <h2 className="text-lg font-medium">Shipping Information</h2>
                  {activeSection === 'shipping' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                
                {activeSection === 'shipping' && (
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="First Name"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={formErrors.firstName}
                        fullWidth
                      />
                      
                      <Input
                        label="Last Name"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={formErrors.lastName}
                        fullWidth
                      />
                    </div>
                    
                    <Input
                      label="Email Address"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={formErrors.email}
                      fullWidth
                    />
                    
                    <Input
                      label="Street Address"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      error={formErrors.address}
                      fullWidth
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Input
                        label="City"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        error={formErrors.city}
                        fullWidth
                      />
                      
                      <Input
                        label="State / Province"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        error={formErrors.state}
                        fullWidth
                      />
                      
                      <Input
                        label="ZIP / Postal Code"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        error={formErrors.zipCode}
                        fullWidth
                      />
                    </div>
                    
                    <div className="mt-4">
                      <Button
                        type="button"
                        variant="primary"
                        size="lg"
                        fullWidth
                        onClick={validateForm}
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Payment Information */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div 
                  className="flex justify-between items-center p-6 cursor-pointer border-b border-gray-200"
                  onClick={() => setActiveSection('payment')}
                >
                  <h2 className="text-lg font-medium">Payment Information</h2>
                  {activeSection === 'payment' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                
                {activeSection === 'payment' && (
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <CreditCard size={24} className="mr-2 text-gray-600" />
                        <h3 className="text-lg font-medium">Credit Card</h3>
                      </div>
                      
                      <div className="flex mb-4 space-x-4">
                        <img src="https://www.pngall.com/wp-content/uploads/2016/07/Visa-Logo-PNG-Image.png" alt="Visa" className="h-8" />
                        <img src="https://brandlogos.net/wp-content/uploads/2021/11/mastercard-logo.png" alt="Mastercard" className="h-8" />
                        <img src="https://logodix.com/logo/2025082.png" alt="PayPal" className="h-8" />
                        <img src="https://www.pngall.com/wp-content/uploads/2016/07/American-Express-Logo-PNG.png" alt="American Express" className="h-8" />
                      </div>
                    </div>
                    
                    <Input
                      label="Name on Card"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      error={formErrors.cardName}
                      fullWidth
                    />
                    
                    <Input
                      label="Card Number"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="XXXX XXXX XXXX XXXX"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      error={formErrors.cardNumber}
                      fullWidth
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Expiration Date"
                        id="expDate"
                        name="expDate"
                        placeholder="MM/YY"
                        value={formData.expDate}
                        onChange={handleChange}
                        error={formErrors.expDate}
                        fullWidth
                      />
                      
                      <Input
                        label="CVV"
                        id="cvv"
                        name="cvv"
                        placeholder="XXX"
                        value={formData.cvv}
                        onChange={handleChange}
                        error={formErrors.cvv}
                        fullWidth
                      />
                    </div>
                    
                    <div className="mt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        isLoading={isLoading}
                        leftIcon={<Check size={18} />}
                      >
                        Place Order
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm sticky top-24">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium">Order Summary</h2>
              </div>
              
              <div className="p-6">
                <div className="max-h-64 overflow-y-auto mb-4">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${JSON.stringify(item.selectedOptions)}`} className="flex items-start mb-4">
                      <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                          {item.product.name}
                        </h3>
                        
                        {item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && (
                          <div className="mt-1 text-xs text-gray-600">
                            {Object.entries(item.selectedOptions).map(([key, value]) => (
                              <span key={key} className="mr-2">
                                {key}: {value}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-gray-600">
                            Qty: {item.quantity}
                          </span>
                          <span className="text-sm font-medium">
                            {formatPrice(
                              (item.product.discountedPrice || item.product.price) * item.quantity
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-900 font-medium">{formatPrice(subtotal)}</span>
                    </div>
                    
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
                    
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-lg font-bold">{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;