import React, { useState,useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import userContext from "../contexts/userContext";


import { UserCircleIcon, LockClosedIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const PatientLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { setUser } = useContext(userContext);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/patient/login",
        formData,
       
      );
      console.log(response.data.data);
      setUser(response.data.data);
      navigate("/home");
      setMessage("Login successful!");
      console.log("User Logged In:", response.data);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-6">
      <div className="absolute top-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 drop-shadow-lg">
          Welcome to Telehealth
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Your health, our priority. Sign in to access your dashboard.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transition-all duration-300 hover:shadow-3xl"
      >
        <div className="text-center mb-8">
          <UserCircleIcon className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-float" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Patient Login</h2>
          <p className="text-gray-600">Welcome back! Please sign in to continue</p>
        </div>
  
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.includes("successful")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}
  
        <div className="space-y-6">
          {/* Username Field */}
          <div className="relative">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username or Email"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            />
            <UserCircleIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
          </div>
  
          {/* Password Field */}
          <div className="relative">
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
  
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-[1.02] disabled:opacity-50"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Signing In...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                Continue to Dashboard
                <ArrowRightIcon className="w-5 h-5" />
              </div>
            )}
          </button>
  
          <div className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/PatientRegister"
              className="text-blue-600 font-semibold hover:underline"
            >
              Create account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PatientLogin;