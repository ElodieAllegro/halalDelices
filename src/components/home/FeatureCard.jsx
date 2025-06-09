import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center w-full sm:w-64 transform transition-transform hover:scale-105 hover:shadow-lg">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-serif font-bold text-burgundy-700 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;