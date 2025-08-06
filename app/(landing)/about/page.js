
import Free_Consultation from "@/app/components/landing/home/free_initial";
import CommonHeader from "../../components/common/common_section";
import Image from "next/image";


export default function About() {
  return (
    <main className="">
      <CommonHeader heading="About Us" />
      <div className="container">
        <div className="mt-6 md:mt-10 lg:mt-12 xl:mt-[60px] flex flex-col md:flex-row gap-3 lg:gap-4 xl:gap-6">
          <div className="flex-1">
            <p>
              ABCON are design, civil and structural specialists consulting firm with 10 years of experience. All our design solutions are creative, innovative and uniquely catered for our client’s specific needs. With the latest engineering software utilized in-house, all our designs are optimised and ensure the best solution for our clients.
              <br /> <br />
              Since its inception the firm has successfully completed a wide variety of projects covering the residential. commercial and industrial Sectors.
              <br /> <br />
              Architecturally designed residences focused on elegance in amenity. All our architectural services are completely custom, designed around your lifestyle and needs. Your ideas are important to us, and the conception of all architectural design is ultimately based on your needs.
            </p>
          </div>

          <div className="flex-1">
            <p>
              The firm has extensive experience in factory design, medium density residential apartments and retail shops With a Wide range Of building construction material such as; precast panels, tilt-up panels, steel portal frames, concrete structures, timber structures and sandwich panels.
              <br /> <br />
              All our engineers are highly experienced in the preparation of engineering reports, solving structural problems and storm water drainage designs.
            </p>
          </div>

          <div className="flex-1">
            <Image
              src="/about.jpg"
              width={1000}
              height={1000}
              alt="Avout us"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="mt-4 lg:mt-0 xl:-mt-20 ">
          <div className="h-10 w-[1px] bg-[#30408B] md:flex hidden"></div>
          <p className="text-[#30408B] font-semibold text-lg mt-4">
            At ABCON, we provide clients with a complete package of building design services. <br />
            We take the project from conception to approval. procuring all the necessary <br /> documentation.
            This streamlines the entire design process. <br />
          </p>
        </div>

        <div className="mt-12 md:mt-14 lg:mt-16 xl:mt-20">
          <div className="relative w-full h-auto py-12 md:py-20 px-4 md:px-12 text-white">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/building.jpg"
                alt="Building Background"
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0465c3] to-[#273b87] opacity-95 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              {/* Left Column */}
              <div className="md:w-1/3">
                <h2 className="text-yellow-400 font-anton font-bold text-2xl md:text-3xl leading-tight text-center">
                  What our <br />
                  Customers say
                </h2>
              </div>

              {/* Center Testimonial */}
              <div className="md:w-1/3 space-y-4">
                <p className="text-sm md:text-base leading-relaxed text-center">
                  Thank you, ABCON, for your helping building my granny flat. you guys
                  looked after my drawing and the approvals. Couldn’t have done it
                  Without you. Thanks!
                </p>
                <p className="text-yellow-400 font-semibold text-center !mt-20">Gurkan Topal</p>
              </div>

              {/* Right Testimonial */}
              <div className="md:w-1/3 space-y-4">
                <p className="text-sm md:text-base leading-relaxed text-center">
                  I just wanted to thankyou for your excellent service and professionalism,
                  on helping create our dream home design. You made the process so easy
                  and stress free. Your attention to detail and design process is nothing
                  short of outstanding. Thankyou once again
                </p>
                <p className="text-yellow-400 font-semibold text-center !mt-3">Sam and Enass</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10">
          <div className="">
            <div className="flex items-center justify-center gap-6">
              <Image src="/service/BDA_Logo.jpg" alt="Building Designers Australia" width={280} height={200} />
              <Image src="/service/NER_Logo.jpg" alt="Engineers Australia NER" width={280} height={200} />
            </div>
          </div>
        </div>
      </div>
      <Free_Consultation/>
    </main>
  );
}
