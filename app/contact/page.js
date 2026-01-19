"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { GiAlarmClock } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <div className="w-full">

      {/* ========= HERO / HEADING ========= */}
      <section className="h-[50vh] bg-[url('/bner4.jpg')] mt-5 bg-cover bg-center relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          className="relative text-center text-white px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Contact FitZone</h1>
          <p className="mt-3 text-lg">
            Have questions? We’re here to help you.
          </p>
        </motion.div>
      </section>

      {/* ========= CONTACT INFO + FORM ========= */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* ---- LEFT: CONTACT INFO ---- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

          <p className="text-gray-600 mb-6">
            Reach out to us for membership details, training programs,
            or any fitness-related questions.
          </p>

          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-3">
             <FaLocationDot className="text-red-500" />
             <strong>Address:</strong> Johar Town, Lahore
            </p>

            <p className="flex items-center gap-3">
             <MdOutlinePhone className="text-red-500" />
             <strong>Phone:</strong> +92 300 1234567
            </p>

            <p className="flex items-center gap-3">
             <IoMailOutline className="text-red-500" />
             <strong>Email:</strong> fitzone@gmail.com
            </p>

            <p className="flex items-center gap-3">
             <GiAlarmClock className="text-red-500" />
             <strong>Hours:</strong> Mon – Sun (6AM – 11PM)
            </p>
          </div>

        </motion.div>

        {/* ---- RIGHT: CONTACT FORM ---- */}
        <motion.form
          className="bg-white shadow-lg rounded-xl p-8 space-y-5"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="text"
            placeholder="Phone (optional)"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-semibold transition"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* ========= MAP SECTION ========= */}
      <section className="w-full h-[400px]">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps?q=Johar%20Town%20Lahore&output=embed"
          loading="lazy"
        ></iframe>
      </section>

      {/* ========= CTA SECTION ========= */}
      <section className="py-16 bg-black/60 text-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Start Your Fitness Journey Today
        </motion.h2>

        <motion.button
          className="mt-6 px-10 py-4 bg-red-500 hover:bg-red-600 rounded-lg text-lg font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Now
        </motion.button>
      </section>

    </div>
  );
}
