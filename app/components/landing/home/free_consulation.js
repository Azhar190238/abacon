// components/HeroSection.jsx
'use client';
import Image from "next/image";
import AnimatedContent from "../../ui/animatedContent";

export default function Free_Consultation() {
  return (
    <section className="relative w-full h-[440px] overflow-x-hidden">
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
          <AnimatedContent direction="horizontal">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-anton font-bold mb-4">ABCON</h2>
          </AnimatedContent>
          <hr className="border-l-2 border-white w-[2px] h-[40px] mb-4" />
            <AnimatedContent direction="horizontal" reverse >
          <p className="text-lg md:text-xl lg:text-2xl leading-snug">
            Over 10 years of experience <br /> conducting work in Building Design, <br />
            Civil and Structural Engineering.
          </p>
          </AnimatedContent>
        </div>

        <a
          href="/contact_us"
          className="hidden md:inline-block bg-[#E4D829] animate-float hover:bg-[#F4F4F4] text-black font-semibold px-6 py-3 rounded transition"
        >
          Free Initial Consultation
        </a>
      </div>
    </section>
  );
}
