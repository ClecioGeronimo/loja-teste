import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingCart, 
  User, 
  Search, 
  Heart, 
  Menu, 
  X,
  LogIn,
  LogOut,
  ShoppingBag
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useUser } from '../../context/UserContext';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const { user, isAuthenticated, logout } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    setSearchOpen(false);
  };

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-black/50 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <ShoppingBag className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>CSNET STORE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products" className={`font-medium hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
              Todos os Produtos
            </Link>
            <Link to="/products/laptops" className={`font-medium hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
              Notebooks
            </Link>
            <Link to="/products/components" className={`font-medium hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
              Componentes
            </Link>
            <Link to="/products/peripherals" className={`font-medium hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
              Periféricos
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className={`p-2 rounded-full hover:bg-white/10 ${isScrolled ? 'text-gray-600' : 'text-white'}`}
              aria-label="Pesquisar"
            >
              <Search size={20} />
            </button>
            
            <Link to="/wishlist" className={`p-2 rounded-full hover:bg-white/10 relative ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
              <Heart size={20} />
            </Link>
            
            <Link to="/cart" className={`p-2 rounded-full hover:bg-white/10 relative ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <div className="relative group">
                <Link to="/account" className={`flex items-center space-x-2 p-2 rounded-full hover:bg-white/10 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  ) : (
                    <User size={20} />
                  )}
                </Link>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                    <div className="font-medium">{user?.name}</div>
                    <div className="text-xs text-gray-500">{user?.email}</div>
                  </div>
                  <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Minha Conta
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Meus Pedidos
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sair
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <Button 
                  variant={isScrolled ? "primary" : "outline"} 
                  size="sm"
                  leftIcon={<LogIn size={18} />}
                  className={!isScrolled ? "border-white text-white hover:bg-white/20" : ""}
                >
                  Entrar
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link to="/cart" className={`p-2 relative ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button 
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-600' : 'text-white'}`}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col h-full p-4">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <ShoppingBag className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">CSNET STORE</span>
            </Link>
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar produtos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <nav className="flex flex-col space-y-4 mb-8">
            <Link 
              to="/products" 
              className="text-gray-800 hover:text-blue-600 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Todos os Produtos
            </Link>
            <Link 
              to="/products/laptops" 
              className="text-gray-800 hover:text-blue-600 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Notebooks
            </Link>
            <Link 
              to="/products/components" 
              className="text-gray-800 hover:text-blue-600 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Componentes
            </Link>
            <Link 
              to="/products/peripherals" 
              className="text-gray-800 hover:text-blue-600 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Periféricos
            </Link>
          </nav>
          
          <div className="flex flex-col space-y-4">
            <Link 
              to="/wishlist" 
              className="flex items-center text-gray-800 hover:text-blue-600 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart size={20} className="mr-3" />
              <span>Lista de Desejos</span>
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/account" 
                  className="flex items-center text-gray-800 hover:text-blue-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User size={20} className="mr-3" />
                  <span>Minha Conta</span>
                </Link>
                
                <Link 
                  to="/orders" 
                  className="flex items-center text-gray-800 hover:text-blue-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ShoppingBag size={20} className="mr-3" />
                  <span>Meus Pedidos</span>
                </Link>
                
                <button 
                  onClick={handleLogout}
                  className="flex items-center text-gray-800 hover:text-blue-600 py-2"
                >
                  <LogOut size={20} className="mr-3" />
                  <span>Sair</span>
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button 
                  variant="primary" 
                  size="md"
                  fullWidth
                  leftIcon={<LogIn size={18} />}
                >
                  Entrar
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        searchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="container mx-auto px-4 pt-20">
          <div className="bg-white rounded-lg shadow-xl p-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Pesquisar Produtos</h2>
              <button 
                onClick={toggleSearch}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
                aria-label="Fechar pesquisa"
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <input
                  id="search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquisar produtos..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="mt-4 flex justify-end">
                <Button 
                  type="submit" 
                  variant="primary"
                  disabled={!searchQuery.trim()}
                >
                  Pesquisar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;