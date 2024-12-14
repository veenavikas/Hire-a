import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceProvider } from '../types';
import ProviderCard from '../components/ProviderCard';
import { getCurrentLocation } from '../utils/location';
import { MapPin } from 'lucide-react';

export default function ServiceList() {
  const { category } = useParams<{ category: string }>();
  const [providers, setProviders] = useState<ServiceProvider[]>([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const position = await getCurrentLocation();
        setLocation(position);
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    fetchLocation();
    // Fetch providers from Firebase based on category
  }, [category]);

  const handleBooking = (provider: ServiceProvider) => {
    // Implement booking logic
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="w-5 h-5 text-blue-600" />
        <span className="text-gray-600">
          {location ? 'Using your current location' : 'Location access required'}
        </span>
      </div>

      <div className="space-y-4">
        {providers.map((provider) => (
          <ProviderCard
            key={provider.id}
            provider={provider}
            onBook={handleBooking}
          />
        ))}
      </div>
    </div>
  );
}