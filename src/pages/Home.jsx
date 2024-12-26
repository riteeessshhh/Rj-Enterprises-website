import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { FaArrowRight, FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import refrigerator from "../assets/refrigerator.jpg";
import washingMachine from "../assets/washing machine.jpg";
import Footer from "../Components/Footer";
import { motion } from "framer-motion"; // Import framer-motion

const Home = () => {
  const [appear, setAppear] = useState(true);

  return (
    <>
      <Navbar />

      {/* Page Title with animation */}
      <motion.div
        className="my-10 px-6 lg:px-44 lg:my-20 text-center"
        initial={{ opacity: 0, y: -50 }} // Starting position off-screen
        animate={{ opacity: 1, y: 0 }} // Final position on screen
        transition={{ duration: 1, type: "spring", stiffness: 50 }} // Animation properties
      >
        <h1 className="text-2xl lg:text-5xl font-semibold leading-snug">
          We are Professional in
          <span className="text-blue-800"> Refrigerator </span>
          and <span className="text-blue-800"> Washing Machine </span> Repair
          Services in
          <span className="text-blue-800"> Mumbai and Navi-Mumbai</span>.
        </h1>
      </motion.div>

      {/* Call Button with hover and tap effects */}
      <div className="flex justify-center my-8">
        <a href="tel:+918779763818">
          <motion.button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 lg:text-3xl"
            whileHover={{ scale: 1.1, rotate: 5 }} // Adding rotation on hover
            whileTap={{ scale: 0.9, rotate: -5 }} // Adding tap effect with rotation
            transition={{ type: "spring", stiffness: 300 }}
          >
            Call us Now
          </motion.button>
        </a>
      </div>

      {/* Fixed Icons with slide-in and hover effects */}
      <div className="fixed right-2 top-1/2 z-50 transform -translate-y-1/2 flex flex-col items-center">
        {/* Toggle Button */}
        <motion.div
          className="bg-gray-700 p-2 rounded-full mb-4 cursor-pointer"
          onClick={() => setAppear(!appear)}
          whileHover={{ scale: 1.2, rotate: 45 }} // Rotate on hover
          whileTap={{ scale: 0.8 }} // Scale down on tap
          initial={{ x: 100 }} // Start off-screen
          animate={{ x: 0 }} // Slide in from right
          transition={{ duration: 0.5 }}
        >
          {appear ? (
            <FaArrowRight size={15} className="text-white" />
          ) : (
            <FaArrowLeft size={15} className="text-white" />
          )}
        </motion.div>

        {/* Conditional Icons with smooth transitions */}
        {appear && (
          <>
            <motion.a
              href="https://wa.me/918779763818"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:pl-8 bg-green-600 rounded-md px-1 py-2 mb-1"
              whileHover={{ scale: 1.2, rotate: 10 }} // Hover with scale and rotate
              whileTap={{ scale: 0.9 }} // Tap scale
              initial={{ opacity: 0 }} // Start invisible
              animate={{ opacity: 1 }} // Fade in
              transition={{ duration: 0.5 }}
            >
              <FaWhatsapp size={20} className="text-white" />
            </motion.a>

            <motion.a
              href="tel:+918779763818"
              className="hover:pl-8 bg-green-600 rounded-md px-1 py-2"
              whileHover={{ scale: 1.2, rotate: -10 }} // Hover with scale and rotate
              whileTap={{ scale: 0.9 }} // Tap scale
              initial={{ opacity: 0 }} // Start invisible
              animate={{ opacity: 1 }} // Fade in
              transition={{ duration: 0.5 }}
            >
              <IoIosCall size={20} className="text-white" />
            </motion.a>
          </>
        )}
      </div>

      {/* Services Section with Fade-in and hover effects */}
      <div className="bg-gray-900 py-10">
        <motion.h2
          className="text-3xl lg:text-4xl text-white text-center font-bold mb-6 tracking-widest"
          initial={{ opacity: 0 }} // Fade-in from invisible
          animate={{ opacity: 1 }} // Fully visible
          transition={{ duration: 1, delay: 0.5 }} // Delay for fade-in
        >
          Our Services
        </motion.h2>

        <motion.div
          className="flex flex-col lg:flex-row lg:justify-center lg:gap-20 gap-10 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Service Cards with hover effects */}
          <motion.div
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 1.05, y: -10 }} // Lift on hover
            whileTap={{ scale: 0.95 }} // Scale down on click
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={refrigerator}
              alt="Refrigerator Repair Service"
              className="w-full max-w-md h-60 object-cover rounded-lg"
            />
            <p className="text-white bg-gray-500 px-4 py-2 rounded-lg mt-8">
              Refrigerator Repair Service
            </p>
            <p className="text-gray-300 mt-2">
              Don't let a malfunctioning fridge spoil your food. Contact us
              today for fast and reliable fridge repair services.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 1.05, y: -10 }} // Lift on hover
            whileTap={{ scale: 0.95 }} // Scale down on click
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={washingMachine}
              alt="Washing Machine Repair Service"
              className="w-full max-w-md h-60 object-cover rounded-lg"
            />
            <p className="text-white bg-gray-500 px-4 py-2 rounded-lg mt-8">
              Washing Machine Repair Service
            </p>
            <p className="text-gray-300 mt-2">
              Don't let a faulty washing machine disrupt your laundry routine.
              Contact us for quick and dependable services.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }} // Fade in
          animate={{ opacity: 1 }} // Fully visible
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="https://wa.me/918779763818"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 lg:text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Whatsapp Us
            </motion.button>
          </a>
        </motion.div>
      </div>

      {/* Why Choose Us Section with scroll animations */}
      <motion.div
        className="bg-white py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.h2
          className="text-4xl lg:text-5xl text-red-500 font-bold text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Why you should choose us?
        </motion.h2>

        <motion.div
          className="mt-6 mx-4 lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-auto max-h-[500px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {/* Service Benefits Cards */}
          <motion.div
            className="shadow-md p-6 rounded-lg border-l-4 border-blue-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <h3 className="font-bold text-xl text-gray-900">Experienced Technicians</h3>
            <p className="text-gray-700 mt-2">
              Our technicians are highly trained to handle any repair job with
              professionalism.
            </p>
          </motion.div>

          <motion.div
            className="shadow-md p-6 rounded-lg border-l-4 border-blue-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <h3 className="font-bold text-xl text-gray-900">Affordable Services</h3>
            <p className="text-gray-700 mt-2">
              We provide high-quality repair services at affordable rates.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Home;
