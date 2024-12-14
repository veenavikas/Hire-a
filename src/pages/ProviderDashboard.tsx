import React, { useState, useEffect } from 'react';
import { Clock, MapPin, DollarSign } from 'lucide-react';

export default function ProviderDashboard() {
  const [activeRequests, setActiveRequests] = useState<any[]>([]);
  const [earnings, setEarnings] = useState({
    today: 0,
    thisWeek: 0,
    thisMonth: 0
  });

  useEffect(() => {
    // Fetch provider data from Firebase
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Provider Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Today's Earnings</h3>
            <DollarSign className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold">₹{earnings.today}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">This Week</h3>
            <DollarSign className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold">₹{earnings.thisWeek}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">This Month</h3>
            <DollarSign className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold">₹{earnings.thisMonth}</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Active Requests</h2>
        {activeRequests.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
            No active requests
          </div>
        ) : (
          <div className="space-y-4">
            {activeRequests.map((request) => (
              <div key={request.id} className="bg-white rounded-lg shadow-md p-6">
                {/* Request details */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}