"use client";

import { FaFacebook, FaInstagram, FaWhatsapp, FaDumbbell } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <FaDumbbell className="text-blue-500" />
            FitZone
          </h2>
          <p className="mt-3 text-gray-400">
            Transform your body, mind, and life with our professional fitness programs.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
  {/* Facebook */}
         <a
         href="https://www.facebook.com/fitzonegym"
         target="_blank"
         rel="noopener noreferrer"
         className="text-xl hover:text-blue-500 transition cursor-pointer"
          >
        <FaFacebook />
       </a>

        {/* Instagram */}
        <a
       href="https://www.instagram.com/fitzonegym/"
       target="_blank"
       rel="noopener noreferrer"
       className="text-xl hover:text-pink-500 transition cursor-pointer"
         >
      <FaInstagram />
       </a>

         {/* WhatsApp */}
      <a
        href="https://wa.me/923226960972"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-green-500 transition cursor-pointer"
       >
    <FaWhatsapp />
  </a>
</div>

        </div>

        {/* QUICK LINKS */}
        <div>
  <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
    <ul className="space-y-2">
        <li>
        <a href="/" className="hover:text-white cursor-pointer">Home</a>
        </li>
         <li>
        <a href="/about" className="hover:text-gray-400 cursor-pointer">About</a>
         </li>
         <li>
        <a href="/services" className="hover:text-gray-400 cursor-pointer">Services</a>
          </li>
         <li>
          <a href="/plans" className="hover:text-gray-400 cursor-pointer">Plans</a>
         </li>
         <li>
          <a href="/contact" className="hover:text-gray-400 cursor-pointer">Contact</a>
           </li>
         </ul>
        </div>

        {/* PROGRAMS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Programs</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Strength Training</li>
            <li className="hover:text-gray-400 cursor-pointer">Fat Loss Program</li>
            <li className="hover:text-gray-400 cursor-pointer">CrossFit</li>
            <li className="hover:text-gray-400 cursor-pointer">Cardio & HIIT</li>
            <li className="hover:text-gray-400 cursor-pointer">Yoga Classes</li>
          </ul>
        </div>

        {/* CONTACT */}                                               
              <div className="space-y-5 text-lg">

  {/* Address */}
           <div className="flex items-start gap-3">
                <FaLocationDot className="text-red-500 text-xl mt-1" />
           <div>
                <p className="font-semibold text-gray-100">Address</p>
                <p className="text-gray-300">
                  FitZone Gym, DHA Phase 6, Lahore
                </p>
           </div>
       </div>

         {/* Phone */}
            <div className="flex items-start gap-3">
             <MdOutlinePhone className="text-red-500 text-xl mt-1" />
              <div>
               <p className="font-semibold text-gray-100">Phone</p>
               <p className="text-gray-300">
                  +92 300 1234567
               </p>
               </div>
             </div>

            {/* Email */}
              <div className="flex items-start gap-3">
                 <IoMailOutline className="text-red-500 text-xl mt-1" />
               <div>
              <p className="font-semibold text-gray-100">Email</p>
              <p className="text-gray-300">
               fitzone@gmail.com
               </p>
          </div>
        </div>

</div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} FitZone Fitness. All rights reserved.
      </div>
    </footer>
  );
}
