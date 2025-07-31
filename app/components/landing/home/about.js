"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#0b2e59] to-[#1c74b7] py-12">
      <div className="max-w-[1230px] mx-auto px-4 md:flex items-center gap-10">
        
        {/* Left: Text */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl font-bold mb-4">ABCON</h2>
          <p className="mb-4">
            ABCON is a Design, Civil and Structural specialists consulting firm with over
            10 years of experience. All our design solutions are creative, innovative and uniquely
            catered for our client’s specific needs. With the latest software’s utilised in-house, all
            our designs are optimised and ensure the best solution for our clients.
          </p>
          <p className="mb-6">
            All our Designers and Engineers are highly experienced in the preparation of DA
            (Development Applications), CC (Construction Certificates), CDC (Complying Development Certificate),
            Engineering reports, solving structural problems and Stormwater Drainage Designs.
          </p>
          <hr className="border-l-4 border-white w-10 mb-6" />

          <h3 className="text-2xl font-semibold mb-3">About Us</h3>
          <p className="mb-4">
            Since its inception the firm has successfully completed a wide variety of projects covering the
            Residential, Commercial and Industrial Sectors. The firm comprises a collaborative team of Engineers
            and Building Designers who work in conjunction in producing extensive work for factory design, medium
            density residential apartments, retail shops and more.
          </p>
          <p>
            ABCON is uniquely tailored to sustaining a unique design imprint within our client’s projects. All our
            designs are uniquely and creatively derived from extensive planning, research and development. Our
            engineering department prides itself on deriving solutions to all structural and civil challenges.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/building.jpg"
            alt="House"
            width={700}
            height={500}
            className="transition-transform duration-500 group-hover:scale-110 object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
