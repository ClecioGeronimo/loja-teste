import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              leftIcon={<ArrowLeft size={18} />}
            >
              Go Back
            </Button>
            
            <Link to="/">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<Home size={18} />}
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;