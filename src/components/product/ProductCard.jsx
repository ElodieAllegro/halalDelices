import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.featured && (
            <span className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold py-1 px-2 m-2 rounded">
              En vedette
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-serif font-bold text-gray-800 mb-1">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-burgundy-600 font-bold">
              {product.price.toFixed(2)}€
            </span>
            <Button
              variant="primary"
              size="sm"
              onClick={handleAddToCart}
              className="flex items-center"
            >
              <ShoppingCart size={16} className="mr-1" />
              Ajouter
            </Button>
          </div>
          <div className="mt-2">
            <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              {product.category}
            </span>
            <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded ml-2">
              {product.weight}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;