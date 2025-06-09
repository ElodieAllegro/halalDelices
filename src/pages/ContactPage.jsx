import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-800">
                    contact@halaldelices.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">
                    +33(234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">
                    123 Business Street<br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span className="font-medium">Lundi - Samedi</span>
                <span>9:00  - 19:00 </span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Vendredi</span>
                <span>8:00 AM - 12:00 </span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Vendredi aprés-midi</span>
                <span>Fermé</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;