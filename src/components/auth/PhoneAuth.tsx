import React, { useState } from 'react';
import { Phone } from 'lucide-react';

export default function PhoneAuth() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');

  const handleSendOTP = () => {
    // Implement Firebase phone auth here
    setStep('otp');
  };

  const handleVerifyOTP = () => {
    // Implement OTP verification here
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <Phone className="w-12 h-12 text-blue-600" />
      </div>
      
      {step === 'phone' ? (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Enter Phone Number</h2>
          <div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="+91 Phone Number"
            />
          </div>
          <button
            onClick={handleSendOTP}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Send OTP
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Verify OTP</h2>
          <div>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter OTP"
              maxLength={6}
            />
          </div>
          <button
            onClick={handleVerifyOTP}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
}