// components/HeroSection.jsx
import Image from "next/image";

export default function Free_Initial() {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]">
      {/* Background Image */}
      <Image
        src="/building.jpg" // Replace with your image in public folder
        alt="Building Background"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-between px-8 lg:px-20">
        <div className="text-white max-w-xl">
          <h2 className="text-xl font-bold mb-3">ABCON</h2>
          <p className="text-lg md:text-xl leading-snug">
            Over 10 years of experience conducting work in Building Design, Civil and Structural Engineering.
          </p>
        </div>

        <a
          href="#contact"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-3 rounded transition-all"
        >
          Free Initial Consultation
        </a>
      </div>
    </section>
  );
}
