"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full">

      {/* -------- HERO / BANNER SECTION -------- */}
      <section
        className="w-full h-[60vh] relative flex items-center justify-center mt-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/bner3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative text-center text-white px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold">
            About FitZone Gym
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-xl mx-auto">
            Building strength, confidence, and a healthier lifestyle since our beginning.
          </p>
        </motion.div>
      </section>

      {/* -------- OUR STORY / MISSION -------- */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Story & Mission
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          FitZone Gym was founded with the vision to create a welcoming community for everyone who wants to lead a healthy lifestyle. Our mission is to provide professional guidance, modern equipment, and a supportive environment to help you achieve your fitness goals.
        </motion.p>
      </section>

      {/* -------- VALUES / PHILOSOPHY -------- */}
      <section className="py-16 bg-gray-100">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { title: "Commitment", desc: "Dedicated to your fitness journey and results." },
            { title: "Integrity", desc: "Honest guidance and transparency in all we do." },
            { title: "Community", desc: "Creating a supportive and welcoming environment." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------- TEAM / FOUNDERS -------- */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "John Smith", role: "Founder & Head Trainer", img: "/trainer4.jpg" },
            { name: "Emily Davis", role: "Fitness Coach", img: "/trainer5.jpg" },
            { name: "Michael Brown", role: "Nutrition Specialist", img: "/trainer6.jpg" },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={member.img}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5 text-center bg-white">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------- CTA SECTION -------- */}
      <section className="py-16 bg-red-500 text-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Join Our Community Today!
        </motion.h2>
        <motion.button
          className="px-10 py-4 bg-white text-red-500 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </section>

    </div>
  );
}
