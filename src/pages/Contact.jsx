import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [inView, setInView] = useState(false);

  // Trigger animation when the contact section is in view
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contact-section");
      if (element && element.getBoundingClientRect().top < window.innerHeight) {
        setInView(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run it once on mount to check if it's already in view
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div
        id="contact-section"
        className={`max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 py-16 transition-all duration-700 transform ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Feel free to reach out to us through the options below. We're here to help!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* WhatsApp Section */}
          <div
            className="bg-gradient-to-br from-green-100 to-green-200 shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
          >
            <FaWhatsapp size={40} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp</h3>
            <p className="text-gray-700 mb-4">
              Reach out to us on WhatsApp for quick support.
            </p>
            <a
              href="https://wa.me/918779763818"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 font-medium"
            >
              +91 877 976 3818
            </a>
          </div>

          {/* Call Section */}
          <div
            className="bg-gradient-to-br from-gray-100 to-gray-200 shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
          >
            <FaPhone size={40} className="text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-700 mb-4">
              Speak with us directly for assistance.
            </p>
            <a
              href="tel:+918779763818"
              className="text-gray-800 font-medium"
            >
              +91 877 976 3818
            </a>
          </div>

          {/* Email Section */}
          <div
            className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
          >
            <FaEnvelope size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-700 mb-4">
              Send us an email, and we'll get back to you soon.
            </p>
            <a
              href="mailto:jpal14969@gmail.com"
              className="text-blue-800 font-medium"
            >
              jpal14969@gmail.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
