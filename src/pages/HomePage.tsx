import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Truck, Shield, Phone } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { categories, getFeaturedProducts } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <div 
          className="relative h-[80vh] bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Discover Premium Quality Products
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Shop our curated collection of high-quality products. 
                From electronics to fashion, find everything you need with 
                premium quality and exceptional value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg">
                    Shop Now
                  </Button>
                </Link>
                <Link to="/sale">
                  <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                    View Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our wide selection of products across multiple categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <Link 
                to={`/products/${category.id}`} 
                key={category.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-200 mb-3">{category.description}</p>
                  <span className="flex items-center text-sm font-medium">
                    Shop Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
              <p className="text-gray-600">
                Discover our handpicked selection of premium products
              </p>
            </div>
            <Link to="/products" className="hidden sm:flex items-center text-blue-600 hover:text-blue-700 font-medium">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/products">
              <Button variant="outline">
                View All Products <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center transition-transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Enjoy free shipping on all orders over $50. Fast and reliable delivery to your doorstep.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center transition-transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Shop with confidence with our secure payment options and buyer protection.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center transition-transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our customer service team is available 24/7 to assist you with any questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-blue-100 mb-8">
              Subscribe to receive updates on new products, special offers, and more.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <Button variant="secondary" type="submit" className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
            
            <p className="mt-4 text-sm text-blue-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;