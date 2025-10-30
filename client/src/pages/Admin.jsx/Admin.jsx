import React, { useContext } from 'react';
import UserContext from '../../contexts/userContext';

const Admin = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-lg text-gray-600 animate-pulse">Loading user data...</div>
      </div>
    );
  }

  // Format date of birth
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Format phone number
  const formatPhoneNumber = (phone) => {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6 md:p-10">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Admin Profile</h1>

        {/* Personal Info */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 border-b pb-2 mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoItem label="Full Name" value={user.fullname} />
            <InfoItem label="Username" value={user.username} />
            <InfoItem label="Gender" value={user.gender} />
            <InfoItem label="Date of Birth" value={formatDate(user.dateOfBirth)} />
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 border-b pb-2 mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoItem label="Email" value={user.email} />
            <InfoItem label="Phone Number" value={formatPhoneNumber(user.phoneNumber)} />
          </div>
        </div>

        {/* Account Info */}
        <div>
          <h2 className="text-xl font-semibold text-blue-600 border-b pb-2 mb-4">Account Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoItem label="Account Type" value={user.role} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Info item
const InfoItem = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-gray-500 text-sm">{label}</span>
    <span className="text-lg font-medium text-gray-800">{value}</span>
  </div>
);

export default Admin;
