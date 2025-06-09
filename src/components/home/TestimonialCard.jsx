import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ name, role, comment, avatar }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform transition hover:shadow-lg relative">
      <div className="absolute -top-4 -left-4 bg-gold-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
        <Quote size={20} />
      </div>
      <div className="mb-4 pt-4">
        <p className="text-gray-700 italic">"{comment}"</p>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={avatar} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-gray-800">{name}</p>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;