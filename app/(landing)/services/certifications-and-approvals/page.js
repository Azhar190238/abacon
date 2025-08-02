
import CommonHeader from "@/app/components/common/common_section";
import Image from "next/image";


export default function About() {
  return (
    <main className="">
      <CommonHeader heading="Services" subheading={"Certifications and Approvals"} />
      <div className="container mt-6 md:mt-10 xl:mt-16">
        <Image
          src="/service/service.jpg"
          width={1000}
          height={1000}
          alt="Background"
          className="w-full h-[215px]"
        />
        <div className="mt-5 md:mt-8 xl:mt-10 ">
          <h2 className="text-black font-semibold text-sm">Structural Certifications</h2>
          <p className="mt-3 md:mt-5 lg:mt-6 max-w-[534px]">
            We offer full engineering certification of all proposed and existing structural works including staged construction, alterations and additions, extensions and fit-outs on existing structures.
          </p>
        </div>

        <div className="mt-10 md:mt-14 xl:mt-[72px]">
          <h2 className="text-black font-semibold text-sm">Civil Certifications</h2>
          <p className="mt-3 md:mt-5 lg:mt-6 max-w-[544px]">
            We offer full engineering certification of all proposed and existing civil work.
          </p>
        </div>
      </div>
    </main>
  );
}
