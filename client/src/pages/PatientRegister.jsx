import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserCircleIcon, LockClosedIcon, EnvelopeIcon, PhoneIcon, CalendarIcon } from '@heroicons/react/24/outline';

const PatientRegister = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    gender: '',
    dateOfBirth: '',
    phoneNumber: '',
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:4000/api/v1/patient/register', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      setMessage(response.data.message || 'Registration successful!');
      navigate('/PatientLogin');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg transition-all duration-300 hover:shadow-3xl"
      >
        <div className="text-center mb-8">
          <UserCircleIcon className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-float" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Patient Registration</h2>
          <p className="text-gray-600">Create your account to get started</p>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg ${message.includes('successful') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            />
            <UserCircleIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
          </div>

          {/* Username */}
          <div className="relative">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            />
            <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
          </div>

          {/* Email */}
          <div className="relative md:col-span-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            />
            <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
          </div>

          {/* Password */}
          <div className="relative md:col-span-2">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            />
            <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
          </div>

          {/* Gender */}
          <div className="relative">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 appearance-none bg-transparent"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="Other">Other</option>
            </select>
            <UserCircleIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
          </div>

          {/* Date of Birth */}
          <div className="relative">
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-400"
              required
            />
            <CalendarIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
          </div>

          {/* Phone Number */}
          <div className="relative md:col-span-2">
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            />
            <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-[1.02] disabled:opacity-50"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Registering...
            </div>
          ) : (
            'Create Account'
          )}
        </button>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/PatientLogin')}
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign in here
          </button>
        </p>
      </form>
    </div>
  );
};

export default PatientRegister;