import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-serif font-bold text-burgundy-700 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-6">Page non trouvée</h2>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez semble introuvable. Peut-être a-t-elle été déplacée ou supprimée.
        </p>
        <Link to="/home">
          <Button 
            variant="primary" 
            size="lg"
            className="inline-flex items-center"
          >
            <Home size={20} className="mr-2" />
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;