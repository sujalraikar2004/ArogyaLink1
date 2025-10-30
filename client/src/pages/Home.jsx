import React from 'react';
import { BsArrowRight, BsCalendarCheck, BsSearch, BsPeople } from 'react-icons/bs';
import { FaUserMd, FaRegHospital, FaHeartbeat } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import About from '../components/About/About.jsx';
import ServiceList from '../components/Services/ServiceList.jsx';
import DocterList from '../components/doctors/DocterList.jsx';
import Layout from '../layout/Layout.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Header/Footer/Footer.jsx';

const Home = () => {
  const stats = [
    { number: "40+", text: "Years of Experience" },
    { number: "15k+", text: "Satisfied Patients" },
    { number: "99.9%", text: "Patient Satisfaction" }
  ];

  const featureCards = [
    {
      icon: <FaUserMd className="text-blue-600 text-5xl mb-4" />,
      title: "Find a Doctor",
      description: "Looking for a doctor? Our platform makes it easy to find the right healthcare professional for your needs. Browse our list of experienced doctors, filter by specialty or availability, and schedule your appointment with just a few clicks.",
      link: "/doctor"
    },
    {
      icon: <FaRegHospital className="text-blue-600 text-5xl mb-4" />,
      title: "Our Services",
      description: "From virtual consultations with doctors to prescription refills, lab test orders, and specialist referrals, we've got you covered. Experience the convenience of accessing quality healthcare from the comfort of your own home.",
      link: "/services"
    },
    {
      icon: <BsCalendarCheck className="text-blue-600 text-5xl mb-4" />,
      title: "Report Analyser",
      description: "Ready for better health? Booking is quick and easy. Select your preferred date and time, choose a healthcare provider, and confirm your booking. Our seamless scheduling gets you on your way to personalized care in no time.",
      link: "/appointment"
    }
  ];

  const virtualTreatmentPoints = [
    "Schedule appointments directly through our secure platform",
    "Connect with doctors via high-quality video conferencing",
    "Get prescriptions and treatment plans delivered digitally"
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 pt-24 pb-16 md:py-28 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
                Trusted Healthcare Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Welcome to Our <span className="text-blue-600">Telemedicine</span> Platform
              </h1>
              <p className="text-lg text-gray-700 mb-8 lg:pr-10">
                Where quality care meets convenience. We're here to support your health journey every step of the way, providing expert medical care from the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointment">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center">
                    Book an Appointment <BsArrowRight className="ml-2" />
                  </button>
                </Link>
                <Link to="/services">
                  <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg border border-blue-600 transition duration-300">
                    Our Services
                  </button>
                </Link>
              </div>
              
              {/* Stats Section */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center md:items-start">
                    <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">{stat.number}</h2>
                    <p className="text-gray-600 font-medium">{stat.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Images */}
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/api/placeholder/480/640" 
                  alt="Doctor with patient" 
                  className="rounded-lg shadow-lg transform translate-y-8"
                />
                <img 
                  src="/api/placeholder/480/640" 
                  alt="Telemedicine consultation" 
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src="/api/placeholder/480/320" 
                  alt="Medical professional" 
                  className="rounded-lg shadow-lg col-span-2"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:flex items-center gap-3">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                      <FaUserMd className="text-blue-600" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold">24/7 Support</p>
                  <p className="text-xs text-gray-500">From our medical team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Providing Best Telemedicine Services
            </h2>
            <p className="text-lg text-gray-600">
              Access quality healthcare from anywhere, anytime with our comprehensive telehealth solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300 border border-gray-100 h-full flex flex-col">
                <div className="mb-4 text-center">{card.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{card.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{card.description}</p>
                <Link 
                  to={card.link} 
                  className="mt-auto flex items-center justify-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                >
                  Learn More <BsArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
              Our Medical Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600">
              World-class care for everyone. Our Health System offers unmatched expert healthcare for all your needs.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* Virtual Care Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
                Virtual Care
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Quality Treatment From<br />Anywhere, Anytime
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience healthcare that fits your schedule and location. Our virtual care options provide the same quality treatment without the need to visit a physical office.
              </p>
              
              <ul className="mb-8 space-y-4">
                {virtualTreatmentPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/services/virtual-care">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center">
                  Learn More <BsArrowRight className="ml-2" />
                </button>
              </Link>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2 relative">
              <img 
                src="/api/placeholder/640/480" 
                alt="Virtual doctor consultation" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <FaHeartbeat className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Secure & Private</p>
                    <p className="text-gray-600">HIPAA compliant platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
              Our Medical Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Expert Doctors
            </h2>
            <p className="text-lg text-gray-600">
              Our team of experienced healthcare professionals is dedicated to providing you with the highest quality care.
            </p>
          </div>
          <DocterList />
          
          <div className="text-center mt-12">
            <Link to="/doctors">
              <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg border border-blue-600 transition duration-300 flex items-center mx-auto">
                View All Doctors <BsArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - New Addition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
              Patient Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Patients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <BsPeople className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Patient Name</h4>
                    <p className="text-gray-500 text-sm">Verified Patient</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "The telemedicine service was exceptional. The doctor was attentive, the platform was easy to use, and I got the care I needed without leaving home."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - New Addition */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Quality Healthcare From Home?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Join thousands of satisfied patients who have transformed their healthcare experience with our telemedicine platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
                  Register Now
                </button>
              </Link>
              <Link to="/appointment">
                <button className="bg-transparent hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg border border-white transition duration-300">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;