import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">HalalDélices</h3>
            <p className="text-gray-300 mb-4">
              Charcuterie artisanale halal, alliant tradition et qualité depuis 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold-500 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-gold-500 transition-colors">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-500 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/commitments" className="text-gray-300 hover:text-gold-500 transition-colors">
                  Nos Engagements
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Saucissons" className="text-gray-300 hover:text-gold-500 transition-colors">
                  Saucissons
                </Link>
              </li>
              <li>
                <Link to="/products?category=Jambons" className="text-gray-300 hover:text-gold-500 transition-colors">
                  Jambons
                </Link>
              </li>
              <li>
                <Link to="/products?category=Terrines" className="text-gray-300 hover:text-gold-500 transition-colors">
                  Terrines
                </Link>
              </li>
              <li>
                <Link to="/products?category=Coffrets" className="text-gray-300 hover:text-gold-500 transition-colors">
                  Coffrets Cadeaux
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-gold-500" />
                <span className="text-gray-300">42 Rue de la Charcuterie, 75001 Paris, France</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-gold-500" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-gold-500" />
                <span className="text-gray-300">contact@halaldelices.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} HalalDélices. Tous droits réservés.
            </p>
            <div className="flex space-x-4 text-sm">
  <Link to="/privacy" className="text-white hover:text-gold-500 transition-colors">
    Politique de Confidentialité
  </Link>
  <Link to="/terms" className="text-white hover:text-gold-500 transition-colors">
    Conditions Générales
  </Link>
  <Link to="/delivery" className="text-white hover:text-gold-500 transition-colors">
    Livraison
  </Link>
</div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;