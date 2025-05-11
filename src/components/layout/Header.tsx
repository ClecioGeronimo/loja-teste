// ... (código anterior permanece o mesmo)

{/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-8">
  <Link to="/products" className={`font-medium hover:text-primary-600 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
    Todos os Produtos
  </Link>
  <Link to="/products/computadores" className={`font-medium hover:text-primary-600 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
    Computadores
  </Link>
  <Link to="/products/notebooks" className={`font-medium hover:text-primary-600 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
    Notebooks
  </Link>
  <Link to="/products/hardware" className={`font-medium hover:text-primary-600 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
    Hardware
  </Link>
  <Link to="/products/gamer" className={`font-medium hover:text-primary-600 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
    Gamer
  </Link>
</nav>

// ... (resto do código permanece o mesmo)