import React from "react";

const Footer = () => {
  return (
    <div className=" from-[#f7f5f2] to-[#e9e4db] mt-12 pt-14 pb-6 px-6 md:px-16 rounded-t-3xl shadow-inner">

       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

         <div>
          <h2 className="text-2xl font-bold font-heading mb-4 text-[#d97706] tracking-wide">
            🙏 About
          </h2>
          <p className="text-gray-700 leading-relaxed font-body">
            This website is dedicated to spreading the divine love of 
            <span className="font-semibold text-[#b45309]"> Radha Krishna</span>  
            through devotion, teachings and spiritual wisdom.
          </p>
        </div>

         <div>
          <h2 className="text-2xl font-bold font-heading mb-4 text-[#d97706] tracking-wide">
            🔗 Quick Links
          </h2>
          <ul className="space-y-2 font-body text-gray-700">
            {["Home", "Teachings", "Naam Jap Counter", "Blog", "Contact"].map((item) => (
              <li key={item}
                className="cursor-pointer hover:text-[#b45309] hover:translate-x-1 transition-all duration-200">
                {item}
              </li>
            ))}
          </ul>
        </div>

         <div>
          <h2 className="text-2xl font-bold font-heading mb-4 text-[#d97706] tracking-wide">
            💛 Follow Us
          </h2>
          <ul className="space-y-2 font-body text-gray-700">
            {["YouTube", "Instagram", "Facebook"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-[#b45309] hover:translate-x-1 transition-all duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

       <div className="border-t border-gray-300 mt-10 mb-5"></div>

       <div className="text-center text-gray-700 font-body text-sm tracking-wide">
        © {new Date().getFullYear()} <span className="font-semibold text-[#b45309]">Radha Krishna Devotion</span> — 
        Made with ❤️ by Rahul
      </div>
    </div>
  );
};

export default Footer;
