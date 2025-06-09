import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Leaf, ThumbsUp } from 'lucide-react';
import { getFeaturedProducts } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';
import HeroSlider from '../components/home/HeroSlider';
import FeatureCard from '../components/home/FeatureCard';
import TestimonialCard from '../components/home/TestimonialCard';

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <div className="flex flex-col">
      {/* Hero Section with Slider */}
      <HeroSlider />
      
      {/* Brand Promise Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy-700 mb-4">
              Charcuterie Halal Artisanale de Qualité
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Depuis 2010, HalalDélices propose des produits de charcuterie halal d'exception, 
              fabriqués dans le respect des traditions et certifiés selon les plus hautes normes.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <FeatureCard 
                icon={<Shield className="h-10 w-10 text-burgundy-600" />}
                title="100% Certifié Halal"
                description="Tous nos produits sont certifiés halal par des organismes reconnus"
              />
              <FeatureCard 
                icon={<Award className="h-10 w-10 text-burgundy-600" />}
                title="Qualité Artisanale"
                description="Fabriqués à la main selon des méthodes traditionnelles"
              />
              <FeatureCard 
                icon={<Leaf className="h-10 w-10 text-burgundy-600" />}
                title="Ingrédients Naturels"
                description="Sans conservateurs artificiels ni additifs chimiques"
              />
              <FeatureCard 
                icon={<ThumbsUp className="h-10 w-10 text-burgundy-600" />}
                title="Saveur Exceptionnelle"
                description="Des recettes exclusives élaborées par nos maîtres charcutiers"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy-700 mb-4">
              Nos Produits Vedettes
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Découvrez notre sélection de charcuteries halal artisanales, 
              élaborées avec passion pour satisfaire les palais les plus exigeants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button 
                variant="primary" 
                size="lg" 
                className="inline-flex items-center"
              >
                Voir tous nos produits
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 bg-burgundy-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Notre Histoire
              </h2>
              <p className="text-lg mb-6">
                Fondée en 2024 par Karim Benali, maître charcutier passionné, HalalDélices 
                est née de la volonté d'offrir des produits de charcuterie halal d'exception, 
                alliant tradition française et respect des préceptes halal.
              </p>
              <p className="text-lg mb-8">
                Dans notre atelier parisien, nous perpétuons des méthodes artisanales transmises 
                de génération en génération, en sélectionnant rigoureusement nos matières premières 
                pour vous garantir une expérience gustative incomparable.
              </p>
              <Link to="/about">
                <Button 
                  variant="secondary" 
                  size="lg"
                >
                  Découvrir notre histoire
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="/imgSlide/pexels-postiglioni-1930760.jpg" 
                    alt="Maître charcutier au travail" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy-700 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits qui ont fait l'expérience 
              de nos produits de charcuterie halal artisanale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sophie M."
              role="Chef à domicile"
              comment="Les produits de HalalDélices sont devenus incontournables dans mes plateaux. La qualité et les saveurs sont tout simplement exceptionnelles."
              avatar="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <TestimonialCard 
              name="Ahmed K."
              role="Amateur de gastronomie"
              comment="Enfin une charcuterie halal qui ne fait aucun compromis sur la qualité ! Le saucisson de bœuf épicé est un régal absolu."
              avatar="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <TestimonialCard 
              name="Layla T."
              role="Blogueuse culinaire"
              comment="J'ai découvert HalalDélices lors d'un salon et depuis je ne jure que par leurs produits pour mes apéritifs. Un savoir-faire remarquable !"
              avatar="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-texture-pattern bg-fixed bg-cover relative">
        <div className="absolute inset-0 bg-burgundy-700 bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Prêt à découvrir nos saveurs ?
            </h2>
            <p className="text-lg mb-8">
              Explorez notre gamme de produits artisanaux et offrez-vous une expérience gustative d'exception, 
              dans le respect des traditions et de vos convictions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/products">
                <Button 
                  variant="secondary" 
                  size="lg"
                >
                  Découvrir nos produits
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-burgundy-700"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;