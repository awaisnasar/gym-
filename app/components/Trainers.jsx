"use client";
import React from "react";
import { motion } from "framer-motion";

export default function trainers() {
  return (
    <div>
<section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Trainers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alex Johnson", img: "/trainer1.jpg" },
            { name: "Sophia Miller", img: "/trainer2.jpg" },
            { name: "Michael Lee", img: "/trainer33.jpg" },
          ].map((trainer, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={trainer.img} className="w-full h-60 object-cover" />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold">{trainer.name}</h3>
                <p className="text-gray-600">Certified Trainer</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
