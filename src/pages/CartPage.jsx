import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  
  // Check if cart is empty
  if (cart.length === 0) {
    return (
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <ShoppingCart size={64} className="text-gray-300" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-burgundy-700 mb-4">
              Votre panier est vide
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Découvrez nos produits de charcuterie halal artisanale et ajoutez-les à votre panier.
            </p>
            <Link to="/products">
              <Button variant="primary" size="lg">
                Parcourir nos produits
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold text-burgundy-700 mb-8 text-center">
          Votre Panier
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left pb-4">Produit</th>
                      <th className="text-center pb-4 hidden sm:table-cell">Prix</th>
                      <th className="text-center pb-4">Quantité</th>
                      <th className="text-right pb-4 hidden sm:table-cell">Total</th>
                      <th className="w-10 pb-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.product.id} className="border-b border-gray-200 last:border-0">
                        <td className="py-4">
                          <div className="flex items-center">
                            <div className="w-16 h-16 rounded overflow-hidden mr-4 hidden sm:block">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <Link 
                                to={`/product/${item.product.id}`}
                                className="font-medium text-gray-800 hover:text-burgundy-600 transition-colors"
                              >
                                {item.product.name}
                              </Link>
                              <p className="text-sm text-gray-500">{item.product.weight}</p>
                              <p className="text-burgundy-600 font-medium sm:hidden mt-1">
                                {item.product.price.toFixed(2)}€
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center hidden sm:table-cell">
                          <span className="text-gray-800">
                            {item.product.price.toFixed(2)}€
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center justify-center">
                            <button 
                              className="w-8 h-8 rounded-l border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                              onClick={() => updateQuantity(item.product.id, Math.max(item.quantity - 1, 0))}
                              aria-label="Diminuer la quantité"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 0)}
                              className="w-12 h-8 border-t border-b border-gray-300 text-center [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            <button 
                              className="w-8 h-8 rounded-r border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              aria-label="Augmenter la quantité"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 text-right hidden sm:table-cell">
                          <span className="font-medium text-gray-800">
                            {(item.product.price * item.quantity).toFixed(2)}€
                          </span>
                        </td>
                        <td className="py-4 pl-4">
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                            aria-label="Supprimer"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex justify-between">
                  <button
                    onClick={clearCart}
                    className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                  >
                    Vider le panier
                  </button>
                  <Link 
                    to="/products"
                    className="text-sm text-burgundy-600 hover:text-burgundy-700 transition-colors font-medium"
                  >
                    Continuer vos achats
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-serif font-bold text-gray-800 mb-4">
                Récapitulatif de la commande
              </h2>
              
              <div className="border-t border-b border-gray-200 py-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-medium">{getCartTotal().toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frais de livraison</span>
                  <span className="font-medium">Calculés à l'étape suivante</span>
                </div>
              </div>
              
              <div className="flex justify-between mb-6">
                <span className="text-lg font-medium">Total</span>
                <span className="text-xl font-bold text-burgundy-700">{getCartTotal().toFixed(2)}€</span>
              </div>
              
              <Button
                variant="primary"
                size="lg"
                fullWidth
                className="flex items-center justify-center"
              >
                Passer à la caisse
                <ArrowRight size={18} className="ml-2" />
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Taxes incluses. Frais de livraison calculés à l'étape suivante.
              </p>
            </div>
            
            <div className="bg-cream rounded-lg p-4 mt-4">
              <h3 className="font-medium text-burgundy-700 mb-2">Moyens de paiement acceptés</h3>
              <p className="text-sm text-gray-600">
                Nous acceptons les cartes Visa, Mastercard, et American Express. 
                Paiement sécurisé par Stripe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;