"use client";

import { motion } from "framer-motion";

export default function AboutMe() {

  const photos = [
  {
    src: "/ikaswara.jpeg",
    title: "Master of Ceremony",
    desc: "IKASWARA 2026 (Campus Expo)",
  },
  {
    src: "/ramadhan.jpeg",
    title: "Moderator",
    desc: "Ramadhan Berkah Mardliyyah UGM",
  },
  {
    src: "/volunteer.jpeg",
    title: "Volunteer",
    desc: "Mangrove Planting Activity",
  },
  {
    src: "/findit.jpeg",
    title: "Committee",
    desc: "FIND IT Event",
  },
  {
    src: "/panitnesco.jpeg",
    title: "Web Dev Division",
    desc: "NESCO Committee",
  },
  {
    src: "/panitcapstone.jpeg",
    title: "Humas & LO",
    desc: "Open House Capstone DTETI",
  },
];

  return (
    <section
      id="about"
      className="section py-24"
    >

      {/* TITLE */}
      <div className="text-center mb-16">

        <p className="text-sm bg-[#DDE5D3] inline-block px-4 py-2 rounded-full mb-4">
          About Me
        </p>

        <h2 className="text-5xl font-bold">
          A Glimpse of My Journey
        </h2>

      </div>

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >

        <p className="text-gray-600 leading-relaxed text-lg">
          Hi! I’m Refa, an Informatics student passionate about
          frontend development, design, and meaningful experiences.
          Beyond coding, I actively participate in organizations,
          volunteering, social activities, and campus events that
          help me grow both personally and professionally.
        </p>

      </motion.div>

      {/* PHOTO GRID */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {photos.map((photo, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative overflow-hidden rounded-3xl shadow-lg group"
  >

    <img
      src={photo.src}
      alt={photo.title}
      className="w-full object-cover group-hover:scale-105 transition duration-300"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">

      <h3 className="font-semibold text-lg">
        {photo.title}
      </h3>

      <p className="text-sm">
        {photo.desc}
      </p>

    </div>

  </motion.div>
))}
      </div>

    </section>
  );
}