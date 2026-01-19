"use client";
import React from "react";
import { motion } from "framer-motion";

// React Icons
import { 
  FaDumbbell, 
  FaRunning, 
  FaHeartbeat, 
  FaAppleAlt, 
  FaUserNinja, 
  FaBiking 
} from "react-icons/fa";

export default function Services() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section
        className="w-full h-[60vh] relative flex items-center justify-center mt-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/bner5.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative text-center text-white px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold">Our Services</h1>
          <p className="text-lg md:text-xl mt-4 max-w-xl mx-auto">
            We provide world-class fitness programs designed for all levels.
          </p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          What We Offer
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Strength Training",
              desc: "Improve muscle growth, power, and overall strength.",
              icon: <FaDumbbell size={50} className="text-red-500 mx-auto mb-4" />,
            },
            {
              title: "Cardio Workouts",
              desc: "Boost endurance with high-intensity cardio programs.",
              icon: <FaRunning size={50} className="text-blue-500 mx-auto mb-4" />,
            },
            {
              title: "Personal Training",
              desc: "1-on-1 coaching tailored to your fitness goals.",
              icon: <FaUserNinja size={50} className="text-purple-500 mx-auto mb-4" />,
            },
            {
              title: "Nutrition Coaching",
              desc: "Customized diet plans for better health & fat loss.",
              icon: <FaAppleAlt size={50} className="text-green-500 mx-auto mb-4" />,
            },
            {
              title: "HIIT Training",
              desc: "Burn fat fast with High-Intensity Interval Training.",
              icon: <FaHeartbeat size={50} className="text-pink-500 mx-auto mb-4" />,
            },
            {
              title: "Cycling Studio",
              desc: "Group cycling sessions for stamina & fun.",
              icon: <FaBiking size={50} className="text-yellow-500 mx-auto mb-4" />,
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
