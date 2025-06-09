import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const heroSlides = [
  {
    id: 1,
    image: 'public/imgSlide/pexels-angel-ayala-321556-28976231.jpg',
    title: 'Charcuterie Halal Artisanale',
    subtitle: 'Des produits d\'exception élaborés dans le respect des traditions',
    buttonText: 'Découvrir nos produits',
    buttonLink: '/products'
  },
  {
    id: 2,
    image: '/imgSlide/pexels-eva-bronzini-5975429.jpg',
    title: 'Coffrets Cadeaux Gourmands',
    subtitle: 'Offrez une expérience gustative inoubliable',
    buttonText: 'Voir les coffrets',
    buttonLink: '/products?category=Coffrets'
  },
  {
    id: 3,
    image: '/imgSlide/pexels-postiglioni-1930760.jpg',
    title: '100% Certifié Halal',
    subtitle: 'Une traçabilité rigoureuse et une certification garantie',
    buttonText: 'Nos engagements',
    buttonLink: '/commitments'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = heroSlides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-slider">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="hero-slide-bg">
            <div className="hero-slide-overlay"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="hero-slide-content">
            <div className="max-w-5xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 shadow-text">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 shadow-text">
                {slide.subtitle}
              </p>
              <Link to={slide.buttonLink}>
                <Button variant="secondary" size="lg">
                  {slide.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        className="hero-nav-btn hero-nav-prev"
        onClick={goToPrevSlide}
        aria-label="Slide précédente"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        className="hero-nav-btn hero-nav-next"
        onClick={goToNextSlide}
        aria-label="Slide suivante"
      >
        <ChevronRight size={24} />
      </button>

      <div className="hero-indicators">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;