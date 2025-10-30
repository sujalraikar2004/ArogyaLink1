import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircleIcon, UserIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export const SelectLogin = () => {
  const navigate = useNavigate();

  const handlePatientLogin = () => {
    navigate("/PatientLogin");
  };

  const handleDoctorLogin = () => {
    navigate("/DoctorLogin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        <div className="text-center">
          <ShieldCheckIcon className="mx-auto h-16 w-16 text-blue-600 animate-bounce-in" />
          <h2 className="mt-6 text-4xl font-bold text-gray-900 font-poppins">
            Secure Login
          </h2>
          <p className="mt-2 text-gray-600">
            Choose your account type to continue
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Patient Card */}
          <div 
            onClick={handlePatientLogin}
            className="group relative cursor-pointer transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <UserCircleIcon className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                Patient Login
              </h3>
              <p className="text-gray-600 text-center text-sm">
                Access your personal health records and medical history
              </p>
              <div className="mt-6">
                <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-[1.02]">
                  Continue as Patient
                </button>
              </div>
            </div>
          </div>

          {/* Doctor Card */}
          <div 
            onClick={handleDoctorLogin}
            className="group relative cursor-pointer transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-100 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <UserIcon className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                Doctor Login
              </h3>
              <p className="text-gray-600 text-center text-sm">
                Access medical tools and patient management system
              </p>
              <div className="mt-6">
                <button className="w-full py-3 px-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-[1.02]">
                  Continue as Doctor
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          Secure authentication powered by AES-256 encryption
        </p>
      </div>
    </div>
  );
};