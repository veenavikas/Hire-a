import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, User, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            HireNow
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/auth" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </Link>
            <Link to="/provider/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Become a Provider
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}