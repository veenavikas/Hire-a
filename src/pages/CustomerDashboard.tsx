import React, { useState, useEffect } from 'react';
import { Clock, MapPin } from 'lucide-react';
import { ServiceProvider } from '../types';

export default function CustomerDashboard() {
  const [activeBookings, setActiveBookings] = useState<any[]>([]);
  const [bookingHistory, setBookingHistory] = useState<any[]>([]);

  useEffect(() => {
    // Fetch bookings from Firebase
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Active Bookings</h2>
          {activeBookings.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
              No active bookings
            </div>
          ) : (
            <div className="space-y-4">
              {activeBookings.map((booking) => (
                <div key={booking.id} className="bg-white rounded-lg shadow-md p-6">
                  {/* Booking details */}
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Booking History</h2>
          {bookingHistory.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
              No booking history
            </div>
          ) : (
            <div className="space-y-4">
              {bookingHistory.map((booking) => (
                <div key={booking.id} className="bg-white rounded-lg shadow-md p-6">
                  {/* Booking history details */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}