import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import DoctorProvider from './context/DoctorContext.jsx';

import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Services from './pages/Services.jsx';
// import Contact from './pages/Contact.jsx'
import { SelectLogin } from './SelectLogin.jsx';
import Doctor from './pages/Docter/Doctor.jsx';
import DoctorDetails from './pages/Docter/DoctorDetails.jsx';
import SignUp from './pages/SignUp.jsx';
import DoctorDashboard from './pages/Doctordashboard.jsx';
import UserContextProvider from './contexts/UseContextProvider.jsx';
import GoogleTranslateWidget from './components/GoogleTranslateWidget.jsx';
import Room from './components/Room.jsx';
import AppointmentForm from './components/AppoinmentForm/AppoinmentForm.jsx';
import Admin from './pages/Admin.jsx/Admin.jsx';
import PatientLogin from './pages/PatientLogin .jsx';
import PatientRegister from './pages/PatientRegister.jsx';
import DoctorLogin from './pages/DoctorLogin.jsx';
import  DoctorRegister from './pages/DoctorRegister.jsx';

export function App() {
  return (
    <UserContextProvider>
      <DoctorProvider>
      <BrowserRouter>
        <GoogleTranslateWidget />
        <Routes>
          {/* Routes without Layout (no header/footer) */}
          <Route path="/" element={<SelectLogin />} />
          <Route path="/patientlogin" element={<PatientLogin />} />
          <Route path="/PatientRegister" element={<PatientRegister />} />
          <Route path="/DoctorLogin" element={<DoctorLogin />} />
          <Route path="/DoctorRegister" element={<DoctorRegister />} />
          <Route path='/Doctordashboard' element={<DoctorDashboard />} />
        
 
          {/* Add more routes without layout here if needed */}

          {/* Routes with Layout */}
   
           <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctor/:id" element={<DoctorDetails />} />
            <Route path="/room/:roomId" element={<Room />} />
            <Route path="/appointment" element={<AppointmentForm />} />
            <Route path="/admin" element={<Admin />} />
          
        </Routes>
      </BrowserRouter>
      </DoctorProvider>
    </UserContextProvider>
  );
}
