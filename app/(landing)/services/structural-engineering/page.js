
import CommonHeader from "@/app/components/common/common_section";
import TextSection from "@/app/components/landing/home/text";
import Image from "next/image";


export default function About() {
  return (
    <main className="">
      <CommonHeader heading="Services" subheading={"Structural Engineering"} />
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
              At ABCON, we have a holistic approach to Structural Design. An iterative method is employed in delivering functional, easy-to-build and feasible designs, catering to a wide array of project specifications and client needs. We utilise the latest in design methods and modelling techniques in ensuring our designs remain optimised and concordant with all Australian building codes and standards
            </p>
            <div className="mt-10 md:mt-14 xl:mt-[72px]">
              <h2 className="text-black font-semibold text-sm">Concrete Design</h2>
              <p className="mt-3 md:mt-5 lg:mt-6 max-w-[534px]">
                Structural design, reinforcement layouts and drafting services for all concrete members to Australian Standards including; Beams, Slabs, Planar members, Columns, Walls (sheer, core and lift-shafts) and Precast panels
              </p>
            </div>

            <div className="mt-10 md:mt-14 xl:mt-[72px]">
              <h2 className="text-black font-semibold text-sm">Steel Design</h2>
              <p className="mt-3 md:mt-5 lg:mt-6 max-w-[534px]">
                Steel member design for all steel beams and columns, trusses, as well as connection design and all associated drafting and detailing.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <h2 className="text-black font-semibold text-sm">Foundation Design</h2>
              <p className="mt-4 md:mt-6 xl:mt-8">Design of all foundation structures and detailing of all associated civil works to Australian Standards including:</p>
              <ul className="list-disc pl-5 lg:pl-10 mt-4 md:mt-6">
                <li>Slab on-grade</li>
                <li>Waffle-pod slabs</li>
                <li>Strip and pad footings</li>
                <li>Cast in-situ (augured) piles</li>
                <li>Driven piles</li>
                <li>Screw piles</li>
              </ul>
            </div>
            <div className="mt-10 md:mt-14 xl:mt-[72px]">
              <h2 className="text-black font-semibold text-sm">Timber Design</h2>
              <p className="mt-4 md:mt-6 xl:mt-8">Design of timber structural members and relevant connection detailing to Australian Standards, including all:</p>
              <ul className="list-disc pl-5 lg:pl-10 mt-4 md:mt-6">
                <li>Bearers</li>
                <li>Joists</li>
                <li>Rafters</li>
                <li>Columns</li>
                <li>Stud walls</li>
                <li>Hanging Beams</li>
                <li>Purlins</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
