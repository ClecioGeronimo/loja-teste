import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ShoppingBag 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">ElegantStore</span>
            </div>
            <p className="mb-4 text-gray-400">
              Your one-stop shop for high-quality products at affordable prices. 
              We offer a curated selection of the best items in electronics, fashion, 
              home decor, and more.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products/electronics" className="text-gray-400 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products/clothing" className="text-gray-400 hover:text-white transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/products/home-decor" className="text-gray-400 hover:text-white transition-colors">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link to="/products/books" className="text-gray-400 hover:text-white transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-400 hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mt-1 mr-3 flex-shrink-0 text-blue-500" />
                <span>
                  1234 Market Street<br />
                  San Francisco, CA 94103<br />
                  United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-blue-500" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-blue-500" />
                <a href="mailto:support@elegantstore.com" className="hover:text-white transition-colors">
                  support@elegantstore.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-gray-800" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ElegantStore. All rights reserved.
          </div>
          <div className="flex space-x-4 md:justify-end">
            <img src="https://www.pngall.com/wp-content/uploads/2016/07/Visa-Logo-PNG-Image.png" alt="Visa" className="h-6" />
            <img src="https://brandlogos.net/wp-content/uploads/2021/11/mastercard-logo.png" alt="Mastercard" className="h-6" />
            <img src="https://logodix.com/logo/2025082.png" alt="PayPal" className="h-6" />
            <img src="https://www.pngall.com/wp-content/uploads/2016/07/American-Express-Logo-PNG.png" alt="American Express" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;