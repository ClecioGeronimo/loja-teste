// ... imports permanecem os mesmos

const Header: React.FC = () => {
  // ... código anterior permanece o mesmo até a navegação desktop

  const mainCategories = [
    { id: 'computers', name: 'Computadores' },
    { id: 'notebooks', name: 'Notebooks' },
    { id: 'components', name: 'Componentes' },
    { id: 'peripherals', name: 'Periféricos' },
    { id: 'networking', name: 'Redes' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-black/50 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <ShoppingBag className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              CSNET STORE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainCategories.map(category => (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Resto do código permanece o mesmo... */}
        </div>
      </div>
    </header>
  );
};

export default Header;