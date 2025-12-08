import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#b2beb26c] mt-10 pt-10 pb-6 px-6 md:px-16">
      
       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

         <div>
          <h2 className="text-xl font-bold font-heading mb-3">🙏 About</h2>
          <p className="text-gray-700 font-body">
            This website is dedicated to spreading the divine love of
            <span className="font-semibold"> Radha Krishna</span> through teachings,
            devotion, and spiritual wisdom.
          </p>
        </div>

         <div>
          <h2 className="text-xl font-bold font-heading mb-3">🔗 Quick Links</h2>
          <ul className="space-y-2 font-body text-gray-700">
            <li className="hover:text-pink-600 cursor-pointer">Home</li>
            <li className="hover:text-pink-600 cursor-pointer">Teachings</li>
            <li className="hover:text-pink-600 cursor-pointer">Naam Jap Counter</li>
            <li className="hover:text-pink-600 cursor-pointer">Blog</li>
            <li className="hover:text-pink-600 cursor-pointer">Contact</li>
          </ul>
        </div>

         <div>
          <h2 className="text-xl font-bold font-heading mb-3">💛 Follow Us</h2>
          <ul className="space-y-2 font-body text-gray-700">
            <li className="hover:text-pink-600 cursor-pointer">YouTube</li>
            <li className="hover:text-pink-600 cursor-pointer">Instagram</li>
            <li className="hover:text-pink-600 cursor-pointer">Facebook</li>
          </ul>
        </div>
      </div>

       <div className="border-t border-gray-300 mt-8 mb-4"></div>

       <div className="text-center text-gray-700 font-body">
        © {new Date().getFullYear()} Radha Krishna Devotion — Made with ❤️ by Rahul
      </div>
    </div>
  );
};

export default Footer;
