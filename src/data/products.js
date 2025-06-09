export const products = [
  {
    id: '1',
    name: 'Saucisson de Bœuf Épicé',
    shortDescription: 'Saucisson de bœuf premium aux épices traditionnelles',
    description: 'Notre saucisson de bœuf épicé est fabriqué selon des méthodes artisanales, avec une sélection rigoureuse de viande de bœuf 100% halal. Parfaitement assaisonné avec un mélange d\'épices traditionnelles, ce saucisson offre une expérience gustative authentique et savoureuse.',
    price: 12.99,
    image: '/halalDelices/imgSlide/pexels-nadin-sh-78971847-14760397.jpg',
    category: 'Saucissons',
    featured: true,
    ingredients: ['Viande de bœuf halal', 'Sel', 'Poivre', 'Ail', 'Épices naturelles'],
    weight: '200g',
    nutritionalInfo: {
      calories: 320,
      protein: 18,
      fat: 26,
      carbs: 2
    },
    inStock: true
  },
  {
    id: '2',
    name: 'Jambon de Dinde Fumé',
    shortDescription: 'Jambon de dinde fumé au bois de hêtre',
    description: 'Notre jambon de dinde fumé est préparé à partir de dinde fermière élevée en plein air. Fumé délicatement au bois de hêtre selon des techniques traditionnelles, ce jambon offre une saveur douce et équilibrée qui ravira les amateurs de charcuterie fine.',
    price: 9.99,
    image: '/halalDelices/imgSlide/pexels-nadin-sh-78971847-14760397.jpg',
    category: 'Jambons',
    featured: true,
    ingredients: ['Filet de dinde halal', 'Sel', 'Sucre de canne', 'Épices naturelles'],
    weight: '150g',
    nutritionalInfo: {
      calories: 220,
      protein: 25,
      fat: 12,
      carbs: 1
    },
    inStock: true
  },
  {
    id: '3',
    name: 'Terrine de Volaille aux Pistaches',
    shortDescription: 'Terrine artisanale de volaille agrémentée de pistaches',
    description: 'Notre terrine de volaille aux pistaches est une création gourmande qui associe la finesse de la viande de volaille halal à la saveur délicate des pistaches. Préparée à la main dans notre atelier, cette terrine se déguste aussi bien à l\'apéritif que lors d\'un repas convivial.',
    price: 14.99,
    image: '/halalDelices/imgSlide/pexels-nadin-sh-78971847-14760397.jpg',
    category: 'Terrines',
    featured: false,
    ingredients: ['Viande de volaille halal', 'Foie de volaille halal', 'Pistaches', 'Œufs', 'Épices fines'],
    weight: '180g',
    nutritionalInfo: {
      calories: 280,
      protein: 16,
      fat: 22,
      carbs: 4
    },
    inStock: true
  },
  {
    id: '4',
    name: 'Coffret Dégustation Premium',
    shortDescription: 'Assortiment de nos meilleures charcuteries halal',
    description: 'Notre coffret dégustation premium est l\'assemblage parfait de nos meilleures créations. Composé d\'une sélection variée de charcuteries halal artisanales, ce coffret est idéal pour découvrir l\'étendue de notre savoir-faire ou pour offrir en cadeau à un amateur de bonne charcuterie.',
    price: 39.99,
    image: '/halalDelices/imgSlide/pexels-nadin-sh-78971847-14760397.jpg',
    category: 'Coffrets',
    featured: true,
    ingredients: ['Sélection de charcuteries halal', 'Condiments artisanaux'],
    weight: '500g',
    nutritionalInfo: {
      calories: 350,
      protein: 20,
      fat: 28,
      carbs: 3
    },
    inStock: true
  },
  {
    id: '5',
    name: 'Chorizo de Bœuf Doux',
    shortDescription: 'Chorizo de bœuf légèrement épicé aux paprikas doux',
    description: 'Notre chorizo de bœuf doux est élaboré à partir de viande de bœuf halal sélectionnée avec soin et assaisonnée d\'un mélange délicat de paprikas doux. Parfait pour les amateurs de saveurs méditerranéennes qui préfèrent une note épicée modérée.',
    price: 11.99,
    image: '/halalDelices/imgSlide/pexels-nadin-sh-78971847-14760397.jpg',
    category: 'Saucissons',
    featured: false,
    ingredients: ['Viande de bœuf halal', 'Paprika doux', 'Ail', 'Sel', 'Épices naturelles'],
    weight: '200g',
    nutritionalInfo: {
      calories: 310,
      protein: 17,
      fat: 25,
      carbs: 2
    },
    inStock: true
  },
  {
    id: '6',
    name: 'Rillettes de Canard',
    shortDescription: 'Rillettes de canard confites lentement',
    description: 'Nos rillettes de canard sont préparées selon une recette traditionnelle. La viande de canard halal est cuite lentement dans sa graisse jusqu\'à devenir fondante, puis effilochée à la main pour obtenir cette texture caractéristique des rillettes de qualité. Un incontournable pour les amateurs de charcuterie fine.',
    price: 13.99,
    image: '/halalDelices/imgSlide/pexels-nadin-sh-78971847-14760397.jpg',
    category: 'Terrines',
    featured: false,
    ingredients: ['Viande de canard halal', 'Graisse de canard', 'Sel', 'Poivre'],
    weight: '170g',
    nutritionalInfo: {
      calories: 340,
      protein: 15,
      fat: 30,
      carbs: 0
    },
    inStock: true
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getCategories = () => {
  return [...new Set(products.map(product => product.category))];
};
