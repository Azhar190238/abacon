
import CommonHeader from "@/app/components/common/common_section";
import TextSection from "@/app/components/landing/home/text";
import Image from "next/image";


export default function About() {
  return (
    <main className="">
      <CommonHeader heading="Services" subheading={"Civil Engineering"} />
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
            <p>
              Our team of Engineers guarantee cost effective and approvable designs for all projects. Drafting and Detailing are conducted according to Australian and Council Specifications
            </p>
            <p className="mt-4 md:mt-6 font-anton">Our Civil Design Services include:</p>
            <ul className="list-disc pl-5 lg:pl-10 mt-4 md:mt-6">
              <li>Road Design (State/Council/Subdivisional/Private Roads)</li>
              <li>Intersection and Roundabout Design</li>
              <li>Busway Design</li>
              <li>Walkway Design (Shared Path and Footpaths)</li>
              <li>Bicycleway Design</li>
              <li>Driveway Access Design</li>
              <li>Parking Lot Design (On/Off Street)</li>
            </ul>
          </div>
          <div className="flex-1">
            <p>ABCON delivers highly detailed solutions to many projects including:</p>
            <ul className="list-disc pl-5 lg:pl-10 mt-4 md:mt-6">
              <li>Drainage Design</li>
              <li>Surface Water Hydrology</li>
              <li>Hydraulics</li>
              <li>Water Sensitive Urban Design</li>
              <li>Erosion and Sediment Control</li>
              <li>Construction Staging for Drainage</li>
              <li>Roof Downpipe Design</li>
              <li>Hydrology Software Application and Modelling (Drains, 12D, TUFLOW)</li>
              <li>Channel, Basin Retention, Pit and Pipe Analysis</li>
              <li>Bio-Retention Basin, Grass Pollution Trap</li>
              <li>Music Modelling and Water Use</li>
              <li>Temporary Construction Staging for Drainage Design</li>
              <li>Gutter Sizing and Downpipe Sizing</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
