// components/HeroSection.jsx
import Image from "next/image";

export default function Free_Consultation() {
  return (
    <section className="relative w-full h-[290px]">
      <Image
        src="/building.jpg"
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Get a Free Initial Consultation</h2>
          <div className="border-l-2">
            <p className=" pl-4 text-lg leading-snug max-w-[440px]">
           At ABCON, we provide clients with a complete package of building design and engineering services. We take the project from conception to approval, procuring all the necessary documentation. This streamlines the entire process!
          </p>
          </div>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded transition"
        >
          Call Now!
        </a>
      </div>
    </section>
  );
}
