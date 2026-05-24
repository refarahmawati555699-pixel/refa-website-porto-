"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-8 py-4 shadow-lg w-[90%] max-w-4xl">
      
      <div className="flex items-center justify-between">

        <h1 className="text-xl font-bold">
          My Porto
        </h1>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/projects">Activities</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}