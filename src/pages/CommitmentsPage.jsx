import React from 'react';
import { Leaf, Recycle, Heart } from 'lucide-react';

const CommitmentsPage = () => {
  const commitments = [
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Environmental Sustainability",
      description: "We are committed to reducing our environmental impact through sustainable sourcing, eco-friendly packaging, and carbon-neutral shipping practices."
    },
    {
      icon: <Recycle className="w-12 h-12 text-blue-600" />,
      title: "Zero Waste Initiative",
      description: "Our zero-waste program ensures that we minimize waste at every step of our production process, from manufacturing to delivery."
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Community Support",
      description: "We actively participate in local community initiatives and donate a portion of our profits to environmental and social causes."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Commitments</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We believe in making a positive impact on our planet and communities through sustainable practices and social responsibility.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {commitments.map((commitment, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105"
          >
            <div className="flex justify-center mb-6">
              {commitment.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {commitment.title}
            </h3>
            <p className="text-gray-600">
              {commitment.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Our Goals for 2025
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Carbon Neutral Operations
            </h3>
            <p className="text-gray-600">
              We aim to achieve complete carbon neutrality across all our operations through renewable energy adoption and carbon offset programs.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              100% Sustainable Packaging
            </h3>
            <p className="text-gray-600">
              Our goal is to transition to fully biodegradable and recyclable packaging materials across our entire product line.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Us in Making a Difference</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Together, we can create a more sustainable future. Learn more about how you can participate in our initiatives and make an impact.
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
          Get Involved
        </button>
      </div>
    </div>
  );
};

export default CommitmentsPage;