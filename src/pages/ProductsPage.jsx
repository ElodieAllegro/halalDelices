import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products, getCategories } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { ChevronDown, Filter } from 'lucide-react';

const ProductsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'Tous');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const categories = ['Tous', ...getCategories()];
  
  useEffect(() => {
    // Update selected category when URL changes
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('Tous');
    }
  }, [categoryParam]);
  
  // Filter products by selected category
  const filteredProducts = selectedCategory === 'Tous' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
    
  return (
    <div className="pt-24 pb-18">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-burgundy-700 mb-4">
            Nos Produits
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez notre gamme de charcuteries halal artisanales, élaborées avec passion
            et savoir-faire pour satisfaire les palais les plus exigeants.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="mb-8">
          {/* Desktop Filters */}
          <div className="hidden md:flex items-center justify-center space-x-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-burgundy-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Mobile Filters */}
          <div className="md:hidden mb-6">
            <button
              className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 rounded-md"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              <div className="flex items-center">
                <Filter size={18} className="mr-2 text-burgundy-700" />
                <span className="font-medium">Filtrer par catégorie</span>
              </div>
              <ChevronDown
                size={18}
                className={`transform transition-transform ${isMobileFilterOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {isMobileFilterOpen && (
              <div className="mt-2 bg-white rounded-md shadow-md p-2 z-10 relative">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded-md text-sm ${
                      selectedCategory === category
                        ? 'bg-burgundy-50 text-burgundy-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-700">
              Aucun produit trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;