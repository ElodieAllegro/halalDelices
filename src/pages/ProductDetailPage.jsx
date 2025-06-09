import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, MoveLeft, Check, Info } from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import ProductCard from '../components/product/ProductCard';


const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  
  // Get product details
  const product = id ? getProductById(id) : undefined;
  
  // Get related products from the same category
  const relatedProducts = product 
    ? getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 3)
    : [];
    
  if (!product) {
    return (
      <div className="pt-28 pb-16 container mx-auto px-4 text-center">
        <p className="text-lg text-gray-700 mb-4">Produit non trouvé</p>
        <Button 
          variant="primary" 
          onClick={() => navigate('/products')}
        >
          Retour aux produits
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowAddedToCart(true);
    setTimeout(() => {
      setShowAddedToCart(false);
    }, 3000);
  };
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <div className="mb-6">
          <Link 
            to="/products" 
            className="inline-flex items-center text-burgundy-600 hover:text-burgundy-700 transition-colors"
          >
            <MoveLeft size={18} className="mr-1" />
            <span>Retour aux produits</span>
          </Link>
        </div>
        
        {/* Product details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Product image */}
          <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-burgundy-600">
                {product.price.toFixed(2)}€
              </span>
              <span className="ml-3 text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                {product.weight}
              </span>
              {product.inStock ? (
                <span className="ml-3 text-sm bg-green-100 text-green-800 px-2 py-1 rounded flex items-center">
                  <Check size={16} className="mr-1" />
                  En stock
                </span>
              ) : (
                <span className="ml-3 text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                  Rupture de stock
                </span>
              )}
            </div>
            
            <p className="text-gray-700 mb-6">
              {product.shortDescription}
            </p>
            
            {/* Quantity and add to cart */}
            <div className="mb-8">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Quantité
              </label>
              <div className="flex items-center mb-4">
                <button 
                  className="w-10 h-10 rounded-l border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  aria-label="Diminuer la quantité"
                >
                  -
                </button>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 h-10 border-t border-b border-gray-300 text-center [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button 
                  className="w-10 h-10 rounded-r border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Augmenter la quantité"
                >
                  +
                </button>
              </div>
              
              <div className="relative">
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  onClick={handleAddToCart}
                  className="flex items-center justify-center"
                  disabled={!product.inStock}
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Ajouter au panier
                </Button>
                
                {/* Added to cart notification */}
                <div 
                  className={`absolute top-0 left-0 right-0 bg-green-100 text-green-800 p-3 rounded-md flex items-center justify-center transform transition-all duration-300 ${
                    showAddedToCart ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 pointer-events-none'
                  }`}
                >
                  <Check size={18} className="mr-2" />
                  Produit ajouté au panier !
                </div>
              </div>
            </div>
            
            {/* Category badge */}
            <div className="mb-6">
              <Link 
                to={`/products?category=${product.category}`}
                className="inline-block bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 text-sm px-3 py-1 rounded-full"
              >
                {product.category}
              </Link>
            </div>
            
            {/* Info tabs */}
            <div className="mt-auto">
              <div className="border-b border-gray-200">
                <div className="flex space-x-8">
                  <button
                    className={`py-2 font-medium text-sm border-b-2 ${
                      activeTab === 'description'
                        ? 'border-burgundy-600 text-burgundy-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('description')}
                  >
                    Description
                  </button>
                  <button
                    className={`py-2 font-medium text-sm border-b-2 ${
                      activeTab === 'ingredients'
                        ? 'border-burgundy-600 text-burgundy-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('ingredients')}
                  >
                    Ingrédients
                  </button>
                  <button
                    className={`py-2 font-medium text-sm border-b-2 ${
                      activeTab === 'nutrition'
                        ? 'border-burgundy-600 text-burgundy-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('nutrition')}
                  >
                    Nutrition
                  </button>
                </div>
              </div>
              
              <div className="py-4">
                {activeTab === 'description' && (
                  <p className="text-gray-700">{product.description}</p>
                )}
                
                {activeTab === 'ingredients' && (
                  <div>
                    <p className="text-sm text-gray-500 mb-3">Ingrédients :</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-700">{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {activeTab === 'nutrition' && (
                  <div>
                    {product.nutritionalInfo ? (
                      <div>
                        <p className="text-sm text-gray-500 mb-3">Valeurs nutritionnelles pour 100g :</p>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-50 p-2 rounded">
                            <span className="text-sm text-gray-500">Calories</span>
                            <p className="font-medium">{product.nutritionalInfo.calories} kcal</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <span className="text-sm text-gray-500">Protéines</span>
                            <p className="font-medium">{product.nutritionalInfo.protein}g</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <span className="text-sm text-gray-500">Lipides</span>
                            <p className="font-medium">{product.nutritionalInfo.fat}g</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <span className="text-sm text-gray-500">Glucides</span>
                            <p className="font-medium">{product.nutritionalInfo.carbs}g</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-500">
                        <Info size={18} className="mr-2" />
                        <p>Information nutritionnelle non disponible</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-burgundy-700 mb-6">
              Produits similaires
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;