"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[675px] bg-cover bg-center text-white" style={{ backgroundImage: `url('/images/hero-bg.png')` }}>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 leading-tight">
          Building Design & <br />
          <span className="text-white">Engineering Solutions.</span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-200">
          Excellence and innovation built into every design.
        </p>

        <div className="mt-6 w-full md:w-2/3 border-l-4 border-white pl-4">
          <p className="text-white">
            Building Design, Civil and Structural Engineering Solutions for all types. Give us a call and make a booking.
          </p>
        </div>

        <div className="mt-6 flex gap-4">
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition">
            Call Now!
          </button>
          <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-blue-900 transition">
            Services
          </button>
        </div>
      </div>
    </div>
  );
}
