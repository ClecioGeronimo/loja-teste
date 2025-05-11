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
          {/* Informações da Empresa */}
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">CSNET STORE</span>
            </div>
            <p className="mb-4 text-gray-400">
              Sua loja premium de tecnologia. Oferecemos uma seleção cuidadosamente 
              curada dos melhores produtos em informática e tecnologia com qualidade 
              e preços competitivos.
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

          {/* Loja */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Loja</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Todos os Produtos
                </Link>
              </li>
              <li>
                <Link to="/products/laptops" className="text-gray-400 hover:text-white transition-colors">
                  Notebooks
                </Link>
              </li>
              <li>
                <Link to="/products/components" className="text-gray-400 hover:text-white transition-colors">
                  Componentes
                </Link>
              </li>
              <li>
                <Link to="/products/peripherals" className="text-gray-400 hover:text-white transition-colors">
                  Periféricos
                </Link>
              </li>
              <li>
                <Link to="/products/networking" className="text-gray-400 hover:text-white transition-colors">
                  Redes
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-400 hover:text-white transition-colors">
                  Promoções
                </Link>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Atendimento</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Entrega
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-white transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  Dúvidas Frequentes
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mt-1 mr-3 flex-shrink-0 text-blue-500" />
                <span>
                  Rua Exemplo, 123<br />
                  Centro - São Paulo/SP<br />
                  CEP: 01234-567
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-blue-500" />
                <span>(11) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-blue-500" />
                <a href="mailto:contato@csnetstore.com.br" className="hover:text-white transition-colors">
                  contato@csnetstore.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-gray-800" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CSNET STORE. Desenvolvido por Clécio Florencio. Todos os direitos reservados.
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