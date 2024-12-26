import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import about from "../assets/about.jpeg";
import money from "../assets/money.jpeg";
import professional from "../assets/professional.jpeg";
import { FaWhatsapp, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { motion } from "framer-motion";

const About = () => {
  const [appear, setAppear] = useState(true);

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="relative">
        {/* WhatsApp and Call Icons */}
        <div className="fixed right-4 top-1/2 z-50 transform -translate-y-1/2 flex flex-col items-center">
          <div
            className="bg-gray-700 p-3 rounded-full mb-4 cursor-pointer hover:bg-gray-600"
            onClick={() => setAppear(!appear)}
          >
            {appear ? (
              <FaArrowRight size={20} className="text-white" />
            ) : (
              <FaArrowLeft size={20} className="text-white" />
            )}
          </div>
          {appear && (
            <>
              <a
                href="https://wa.me/918779763818"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 rounded-full p-4 mb-2 transition-all duration-200 hover:bg-green-500 flex items-center"
              >
                <FaWhatsapp size={24} className="text-white" />
              </a>
              <a
                href="tel:+918779763818"
                className="bg-green-600 rounded-full p-4 transition-all duration-200 hover:bg-green-500 flex items-center"
              >
                <IoIosCall size={24} className="text-white" />
              </a>
            </>
          )}
        </div>

        {/* About Content */}
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-16">
          {/* Founder Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={about}
              className="w-full h-96 object-cover shadow-lg"
              alt="Founder"
            />
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">Jaishankar Pal</h1>
              <h2 className="text-lg text-gray-500 mb-6 text-center">The Founder</h2>
              <div className="bg-gray-900 py-6 px-8 rounded-lg shadow-md">
                <h3 className="text-gray-400 text-xl mb-4 text-center">
                  Message from the Founder
                </h3>
                <p className="text-white leading-relaxed text-center">
                  "At RJ Enterprises, our goal is to make it easy and affordable
                  to repair your refrigerators and washing machines. We care
                  about your satisfaction and want to build trust with every
                  customer. You can count on us to take good care of your
                  appliances."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Promises Section */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              We Promise You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <img
                  src={professional}
                  className="w-full h-60 object-cover shadow-lg mb-6"
                  alt="Professional Quality"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Professional Quality Guarantee
                </h3>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <img
                  src={money}
                  className="w-full h-60 object-cover shadow-lg mb-6"
                  alt="Affordable Payments"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Easy and Affordable Payments
                </h3>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <img
                  src={about}
                  className="w-full h-60 object-cover shadow-lg mb-6"
                  alt="Reliable Repairs"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Reliable and Quick Repairs
                </h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
