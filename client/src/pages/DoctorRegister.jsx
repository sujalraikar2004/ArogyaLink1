import React, { useState } from 'react';
import axios from 'axios';
import  './DoctorRegister.css' // Importing the CSS file

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    gender: '',
    specialization: '',
    experience: '',
    hospitalName: '',
    licensePlate: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/v1/doctor/register', formData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Doctor Registration</h2>
      <form onSubmit={handleSubmit} className="form">
        {Object.keys(formData).map((key) => (
          <div key={key} className="form-group">
            <label className="form-label">{key}:</label>
            {key === 'gender' ? (
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <input
                type={key === 'password' ? 'password' : 'text'}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="form-input"
                required
              />
            )}
          </div>
        ))}
        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
};

export default DoctorRegister;
