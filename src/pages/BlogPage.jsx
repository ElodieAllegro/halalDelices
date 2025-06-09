import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Comprendre la Certification Halal",
      excerpt: "Qu’est-ce qu’une viande halal ? Quelles sont les étapes de certification et pourquoi sont-elles si importantes ? On vous explique tout.",
      author: "Charcuterie Al Yaqine",
      date: "2024-05-10",
      image: "/imgHome/halal.jpeg"
    },
    {
      id: 2,
      title: "Sélection Rigoureuse des Bêtes : Notre Engagement Qualité",
      excerpt: "Découvrez comment nous choisissons nos bêtes avec soin, en respectant les normes halal et les critères de qualité supérieure.",
      author: "Charcuterie Al Yaqine",
      date: "2024-05-15",
      image: "/imgHome/premium.png"
    },
    {
      id: 3,
      title: "Ouverture de Notre Charcuterie Halal Artisanale",
      excerpt: "Une nouvelle aventure démarre ! Plongez dans les coulisses de l’ouverture de notre boutique dédiée à la charcuterie 100% halal.",
      author: "Charcuterie Al Yaqine",
      date: "2024-06-01",
      image: "/imgHome/ouverure.jpeg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Le Blog de la Charcuterie Halal</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 hover:text-gold-600 transition duration-200">
                {post.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <button className="flex items-center text-gold-600 hover:text-gold-800 transition duration-200">
                Lire l'article
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-16 bg-gold-50 rounded-lg p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Inscrivez-vous à notre newsletter</h2>
          <p className="text-gray-600 mb-6">
            Recevez nos conseils, nos recettes et les dernières actualités de la charcuterie halal artisanale.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 max-w-md px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-gold-600 text-white px-6 py-2 rounded-md hover:bg-gold-700 transition duration-200"
            >
              S’inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
