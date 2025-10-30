import React, { useContext, useState } from 'react';
import doctorContext from '../context/DoctorContext';
import axios from 'axios';
import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  IdentificationIcon,
  DocumentTextIcon,
  CalendarIcon,
  BuildingOffice2Icon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/solid';

const DoctorDashboard = () => {
  const { doctor } = useContext(doctorContext);

  const [formData, setFormData] = useState({
    diseaseName: '',
    date: '',
    medication: '',
    dosage: '',
    instructions: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.diseaseName ||
      !formData.date ||
      !formData.medication ||
      !formData.dosage ||
      !formData.instructions
    ) {
      setMessage({ type: 'error', text: 'Please fill all fields.' });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:4000/api/v1/prescription', formData);

      setMessage({ type: 'success', text: 'Prescription saved successfully!' });
      setFormData({
        diseaseName: '',
        date: '',
        medication: '',
        dosage: '',
        instructions: '',
      });
    } catch (error) {
      console.error(error);
      setMessage({ type: 'error', text: 'Error submitting prescription.' });
    } finally {
      setLoading(false);
    }
  };

  if (!doctor) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Loading doctor information...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Panel */}
        <div className="md:col-span-1 bg-white rounded-2xl shadow-lg p-6 h-fit">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-blue-50 border-4 border-blue-100 overflow-hidden mb-4">
              {doctor.profileImage ? (
                <img src={doctor.profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <UserCircleIcon className="text-blue-300 w-full h-full p-3" />
              )}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">{doctor.fullname}</h2>
            <p className="text-blue-600 font-medium mb-4">{doctor.specialization}</p>

            <div className="w-full space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <BuildingOffice2Icon className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-600">{doctor.hospitalName}</p>
                  <p className="text-xs text-gray-500">{doctor.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <CurrencyDollarIcon className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm text-gray-600">Consultation Fee</p>
                  <p className="text-xs font-medium text-gray-700">${doctor.consultationFee || '150'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <IdentificationIcon className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-600">Medical License</p>
                  <p className="text-xs font-medium text-gray-700">{doctor.medicalLicense || 'ABCD-1234'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <PhoneIcon className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-700">{doctor.phone || 'Not Provided'}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <EnvelopeIcon className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-700">{doctor.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <DocumentTextIcon className="w-6 h-6 text-blue-500" />
            New Prescription
          </h3>

          {message && (
            <div className={`p-3 rounded-lg text-sm mb-4 ${message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {message.text}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['diseaseName', 'medication', 'dosage'].map((field) => (
                <div key={field} className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 capitalize">{field}</label>
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                    <DocumentTextIcon className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      className="w-full bg-transparent focus:outline-none"
                      placeholder={`Enter ${field}`}
                    />
                  </div>
                </div>
              ))}

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Date</label>
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <CalendarIcon className="w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-transparent focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Instructions</label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleInputChange}
                className="w-full bg-gray-50 p-3 rounded-lg focus:outline-none"
                rows="4"
                placeholder="Enter detailed instructions..."
              />
            </div>

            <div className="flex justify-end gap-4 pt-6">
              <button
                type="button"
                onClick={() => {
                  setFormData({ diseaseName: '', date: '', medication: '', dosage: '', instructions: '' });
                  setMessage(null);
                }}
                className="px-6 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-md transition-all"
              >
                {loading ? 'Saving...' : 'Save Prescription'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
