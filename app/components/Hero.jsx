"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full h-screen relative"> {/* Full viewport height */}
      {/* -------- HERO SECTION -------- */}
      <section
        className="w-full h-full relative flex items-center justify-center bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}

        {/* Text Content with Animation */}
        <motion.div
          className="relative text-center text-gray-300 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mt-20 leading-tight">
            𝗧𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺 𝗬𝗼𝘂𝗿 𝗕𝗼𝗱𝘆, 𝗧𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺 𝗬𝗼𝘂𝗿 𝗟𝗶𝗳𝗲
          </h1>

          <p className="text-lg md:text-2xl mt-6 max-w-xl mx-auto">
            𝑱𝒐𝒊𝒏 𝒕𝒉𝒆 𝒃𝒆𝒔𝒕 𝒇𝒊𝒕𝒏𝒆𝒔𝒔 𝒄𝒐𝒎𝒎𝒖𝒏𝒊𝒕𝒚 𝒊𝒏 𝒚𝒐𝒖𝒓 𝒄𝒊𝒕𝒚.
          </p>
         <Link href="/contact">
          <motion.button
            href="/contact"
            className="mt-20 px-10 py-4 bg-red-500 hover:bg-red-600 text-white cursor-pointer font-semibold rounded-lg text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
