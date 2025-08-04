"use client";
import Image from "next/image";
import AnimatedContent from "../../ui/animatedContent";

export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#0b2e59] to-[#1c74b7]  overflow-x-hidden">
      <div className="max-w-[1230px] mx-auto px-4 md:flex items-center gap-10">

        {/* Left: Text */}
        <div className="md:w-1/2 text-white py-6">
          <AnimatedContent direction="horizontal">
            <h2 className="text-3xl font-bold mb-4">ABCON</h2>
          </AnimatedContent>
          <AnimatedContent direction="horizontal" reverse={true}>
            <p className="mb-4">
              ABCON is a Design, Civil and Structural specialists consulting firm with over
              10 years of experience. All our design solutions are creative, innovative and uniquely
              catered for our client’s specific needs. With the latest software’s utilised in-house, all
              our designs are optimised and ensure the best solution for our clients.
            </p>
          </AnimatedContent>
          <AnimatedContent direction="horizontal" reverse={false}>
            <p className="mb-6">
              All our Designers and Engineers are highly experienced in the preparation of DA
              (Development Applications), CC (Construction Certificates), CDC (Complying Development Certificate),
              Engineering reports, solving structural problems and Stormwater Drainage Designs.
            </p>
          </AnimatedContent>
          <hr className="border-l-4 border-white w-1 h-[60px] mb-6" />
       <AnimatedContent direction="vertical" reverse={true}>
          <h3 className="text-2xl font-semibold mb-3">About Us</h3>
          </AnimatedContent>
          <AnimatedContent direction="horizontal" reverse={false}>
          <p className="mb-4">
            Since its inception the firm has successfully completed a wide variety of projects covering the
            Residential, Commercial and Industrial Sectors. The firm comprises a collaborative team of Engineers
            and Building Designers who work in conjunction in producing extensive work for factory design, medium
            density residential apartments, retail shops and more.
          </p>
          </AnimatedContent>
          <AnimatedContent direction="horizontal" reverse={true}>
          <p>
            ABCON is uniquely tailored to sustaining a unique design imprint within our client’s projects. All our
            designs are uniquely and creatively derived from extensive planning, research and development. Our
            engineering department prides itself on deriving solutions to all structural and civil challenges.
          </p>
          </AnimatedContent>
        </div>

        {/* Right: Image */}
        <div className="md:w-[900px] h-screen -mr-96 md:mt-0 group overflow-hidden relative  rounded-lg shadow-lg">
          <Image
            src="/building.jpg"
            alt="House"
            width={1200}
            height={1200}
            className="transition-transform duration-500 group-hover:scale-110 object-cover w-[1200px] h-full"
          />
        </div>
      </div>
    </section>
  );
}
