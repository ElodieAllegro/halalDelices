import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navigation = [
  { name: 'Accueil', path: '/' },
  { name: 'Produits', path: '/products' },
  { name: 'À Propos', path: '/about' },
  { name: 'Nos Engagements', path: '/commitments' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'
      }`}>
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-serif font-bold text-burgundy-700">
              HalalDélices
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 hover:text-burgundy-600 ${isActive
                    ? 'text-burgundy-600 font-bold'
                    : isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Cart & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <NavLink to="/cart" className="relative p-2 text-gray-700 hover:text-burgundy-600 transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute number -right-1 bg-burgundy-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </NavLink>

            <button
              className="md:hidden text-gray-700 hover:text-burgundy-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''} bg-white fixed top-0 left-0 w-full min-h-screen z-50`}>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-burgundy-600"
          aria-label="Fermer le menu"
        >
          &times;
        </button>

        <nav className="flex flex-col space-y-4 p-6 mt-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 hover:text-burgundy-600 ${isActive ? 'text-burgundy-600 font-bold' : 'text-gray-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

    </header>
  );
};

export default Navbar;