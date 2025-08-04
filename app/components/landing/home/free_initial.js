// components/HeroSection.jsx
'use client';
import Image from "next/image";
import AnimatedContent from "../../ui/animatedContent";

export default function Free_Consultation() {
  return (
    <section className="relative w-full h-[290px] overflow-x-hidden">
      <Image
        src="/building.jpg"
        alt="Building Background"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-[#21458B]/95 z-10" />

      {/* Overlay Content */}
      <div className="absolute container inset-0 z-20 flex items-center justify-between">
        <div className="text-white max-w-2xl">
          <AnimatedContent direction="horizontal">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#FEF12E]">Get a Free Initial Consultation</h1>
          </AnimatedContent>
          <div className="border-l-2 mt-6">
            <AnimatedContent direction="horizontal" reverse>
            <p className=" pl-4 text-base leading-snug max-w-[440px]">
           At ABCON, we provide clients with a complete package of building design and engineering services. We take the project from conception to approval, procuring all the necessary documentation. This streamlines the entire process!
          </p>
          </AnimatedContent>
          </div>
        </div>

        <a
         href="tel: (02) 8768 0561"
          className="hidden md:inline-block bg-[#FEF12E] animate-jump hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded transition"
        >
          Call Now!
        </a>
      </div>
    </section>
  );
}
