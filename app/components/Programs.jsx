"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Programs() {
  return (
    <div>
         {/* -------- PROGRAMS SECTION -------- */}
              <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.h2
                  className="text-3xl font-bold text-center mb-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  Our Programs
                </motion.h2>
        
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { name: "Weight Training", img: "/weight.jpg" },
                    { name: "Cardio Fitness", img: "/cardio.jpg" },
                    { name: "Yoga & Meditation", img: "/yoga.jpg" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="rounded-lg overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <img src={item.img} className="w-full h-48 object-cover" />
                      <div className="p-5">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
        
        
              {/* -------- WHY CHOOSE US -------- */}
              <section className="py-16 bg-gray-900 text-white">
                <motion.h2
                  className="text-3xl font-bold text-center mb-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  Why Choose Us
                </motion.h2>
        
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
                  {[
                    "Certified Trainers",
                    "Modern Equipment",
                    "Affordable Plans",
                    "Customized Workouts",
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      className="p-6 bg-gray-700 rounded-lg text-center"
                      whileHover={{ scale: 1.08 }}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <h3 className="text-xl font-semibold">{text}</h3>
                    </motion.div>
                  ))}
                </div>
              </section>
        
        
    </div>
    );
}
