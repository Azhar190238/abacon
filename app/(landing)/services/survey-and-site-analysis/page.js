
import CommonHeader from "@/app/components/common/common_section";
import TextSection from "@/app/components/landing/home/text";
import Image from "next/image";


export default function About() {
  return (
    <main className="">
      <CommonHeader heading="Services" subheading={"Survey and Site Analysis"} />
      <div className="container mt-6 md:mt-10 xl:mt-16">
        <Image
          src="/service/service.jpg"
          width={1000}
          height={1000}
          alt="Background"
          className="w-full h-[215px]"
        />
        <div className="mt-5 md:mt-8 xl:mt-10 ">
          <p className="max-w-[534px]">
            At ABCON we can organise a survey of your property to ensure an accurate design that encompasses an understanding of the site and its natural surroundings. We also conduct a study of the site to ensure maximum efficiency in utilising the surroundings.
          </p>
        </div>
      </div>
    </main>
  );
}
