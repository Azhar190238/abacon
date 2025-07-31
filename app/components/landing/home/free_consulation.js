// components/HeroSection.jsx
import Image from "next/image";

export default function Free_Consultation() {
  return (
    <section className="relative w-full h-[340px]">
      {/* Background Image */}
      <Image
        src="/building.jpg" // Put your image in /public/building.jpg
        alt="Building Background"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-[#1E4189]/80 z-10" />

      {/* Overlay Content */}
      <div className="absolute container inset-0 z-20 flex items-center justify-between">
        <div className="text-white max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">ABCON</h2>
          <hr className="border-l-2 border-white w-[2px] h-[40px] mb-4" />
          <p className="text-lg md:text-xl leading-snug">
            Over 10 years of experience <br /> conducting work in Building Design, <br />
            Civil and Structural Engineering.
          </p>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded transition"
        >
          Free Initial Consultation
        </a>
      </div>
    </section>
  );
}
