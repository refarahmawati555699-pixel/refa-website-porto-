"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section min-h-screen flex items-center">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="bg-[#DDE5D3] px-4 py-2 rounded-full text-sm">
            Available for projects
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Frontend
            <br />
            Developer
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Hi! I'm Refa, an Informatics student passionate about
            building clean, interactive, and aesthetic websites.
          </p>

          {/* BUTTON */}
          <div className="flex gap-4 mt-8">

            <a
              href="#about"
              className="bg-[#AEC3AE] px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              About Me
            </a>

<Link
  href="/projects#activities"
  className="border border-[#AEC3AE] px-6 py-3 rounded-full font-semibold hover:bg-[#AEC3AE] transition"
>
  My Journey
</Link>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <img
            src="/Refa.jpeg"
            alt="Refa"
            className="w-[320px] h-[320px] object-cover rounded-[40px] shadow-2xl"
          />

        </motion.div>

      </div>

    </section>
  );
}