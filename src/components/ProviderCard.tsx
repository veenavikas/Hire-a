import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { ServiceProvider } from '../types';

interface ProviderCardProps {
  provider: ServiceProvider;
  onBook: (provider: ServiceProvider) => void;
}

export default function ProviderCard({ provider, onBook }: ProviderCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex gap-4">
      <img
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${provider.name}`}
        alt={provider.name}
        className="w-20 h-20 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{provider.name}</h3>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1">{provider.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span>2.5 km away</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            ₹{provider.price}/hr
          </span>
          <button
            onClick={() => onBook(provider)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}