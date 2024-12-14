import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat, Car, Paintbrush, Heart } from 'lucide-react';

const services = [
  {
    id: 'chefs',
    name: 'Professional Chefs',
    icon: ChefHat,
    description: 'Hire expert chefs for your special occasions',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c'
  },
  {
    id: 'drivers',
    name: 'Drivers',
    icon: Car,
    description: 'Professional drivers for your travel needs',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d'
  },
  {
    id: 'caretakers',
    name: 'Care Takers',
    icon: Heart,
    description: 'Compassionate care for your loved ones',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289'
  },
  {
    id: 'painters',
    name: 'Painters',
    icon: Paintbrush,
    description: 'Transform your space with professional painters',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f'
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Find Trusted Service Providers</h1>
        <p className="text-xl text-gray-600">Book verified professionals for all your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <Icon className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
            <p className="text-gray-600">All service providers are thoroughly verified</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
            <p className="text-gray-600">Get connected with providers within minutes</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">Safe and secure payment options</p>
          </div>
        </div>
      </div>
    </div>
  );
}