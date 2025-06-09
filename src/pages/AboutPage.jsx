import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-700 mb-6">
            Welcome to our story. We're passionate about delivering exceptional products
            while maintaining our commitment to sustainability and quality.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To provide outstanding products that enhance our customers' lives while
              maintaining the highest standards of environmental responsibility and
              ethical business practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Quality in everything we do</li>
                <li>• Sustainability at our core</li>
                <li>• Customer satisfaction first</li>
                <li>• Innovation and improvement</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Promise</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Exceptional service</li>
                <li>• Transparent practices</li>
                <li>• Sustainable solutions</li>
                <li>• Community support</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-700 mb-4">
              Since our founding, we've been dedicated to creating products that make
              a difference. Our journey has been marked by continuous innovation and
              a deep commitment to our customers and the environment.
            </p>
            <p className="text-gray-700">
              Today, we continue to grow and evolve, always staying true to our core
              values while embracing new opportunities to serve our community better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;