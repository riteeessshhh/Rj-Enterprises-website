import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4">RJ Enterprises</h2>
          <p className="text-sm text-gray-400">
            Your trusted partner in fridge and washing machine repairs. Quality
            service you can rely on!
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h3>
          <p className="mb-2">
            📞{" "}
            <a href="tel:+911234567890" className="hover:underline">
              +91 123 456 7890
            </a>
          </p>
          <p className="mb-2">
            📧{" "}
            <a href="mailto:jpal14969@gmail.com" className="hover:underline">
              jpal14969@gmail.com
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="text-center border-t border-gray-700 pt-4 mt-8">
        <p className="text-sm">
          &copy; 2024 RJ Enterprises. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
