
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
        <div className="-mt-10">
          <div className="h-5 w-2 bg-"></div>
        </div>
      </div>
      {/* <Free_Consultation/> */}
    </main>
  );
}
