
import CommonHeader from "@/app/components/common/common_section";
import TextSection from "@/app/components/landing/home/text";
import Image from "next/image";


export default function About() {
  return (
    <main className="">
      <CommonHeader heading="Services" subheading={"Building Design Plans"} />
      <div className="container mt-6 md:mt-10 xl:mt-16">
        <Image
          src="/service/service.jpg"
          width={1000}
          height={1000}
          alt="Background"
          className="w-full h-[215px]"
        />
        <div className="mt-5 md:mt-8 xl:mt-10 flex flex-col lg:flex-row gap-5 lg:gap-8">
          <div className="flex-1">
            <p className="mt-4 md:mt-6 font-anton">
              Maximise your Design opportunities. We at ABCON ensure that every design is convened to the best level both aesthetically and conventionally to our client’s preferences. We deliver Development Applications (DA), Construction Certificates (CC) and complying development certificates (CDC).
              <br /> <br />
              Our Building Designers are experienced in the latest CAD Drafting, 3D BIM Modelling and rendering software’s, directed into Residential, industrial and Commercial sectors.
            </p>
          </div>
          <div className="flex-1">
            <p className="mt-4 md:mt-6 font-anton">ABCON delivers highly detailed solutions to many projects including:</p>
            <ul className="list-disc pl-5 lg:pl-10 mt-6">
              <li>Alterations & Additions</li>
              <li>Granny Flats / Secondary Dwellings</li>
              <li>Dual Occupancies / Duplexes</li>
              <li>Dwelling Houses</li>
              <li>High Density Residential Buildings</li>
              <li>Multi Dwelling Houses</li>
              <li>Swimming Pools</li>
              <li>Boarding Houses</li>
            </ul>
          </div>

        </div>
        <div className="mt-7 md:mt-8 xl:mt-12">
          <TextSection />
        </div>
      </div>
    </main>
  );
}
