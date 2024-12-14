export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'customer' | 'provider';
  location?: {
    lat: number;
    lng: number;
  };
}

export interface ServiceProvider extends User {
  services: string[];
  rating: number;
  reviews: Review[];
  availability: boolean;
  price: number;
  documents: {
    id: string;
    type: string;
    url: string;
  }[];
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  basePrice: number;
  image: string;
}