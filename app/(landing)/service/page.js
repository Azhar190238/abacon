
import Free_Consultation from "@/app/components/landing/home/free_initial";
import CommonHeader from "../../components/common/common_section";
import Image from "next/image";
import ServicesSection from "@/app/components/landing/home/services";
import Link from "next/link";


export default function Service() {
  return (
    <main className="">
      <CommonHeader heading="Services" />
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
              At Abcon we work on a variety of services to help get your job done. Below are <br /> some of our services which you can inquire about. If you have any further <br /> questions, please do not hesitate to get in contact with one of our staff.
              <br />
            </p>
            <div className=" flex justify-center mx-auto my-10">
              <Link href="/contact_us">
                <button className="inline-flex items-center justify-center px-5 py-2 font-semibold text-white
               bg-gradient-to-r from-[#1C72B5] to-[#1E317E] 
               bg-[length:200%_200%] transition-all duration-500 ease-in-out
               hover:animate-gradient-x">
                  Get Your Free Consultation Now
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
      <ServicesSection />
      <Free_Consultation />
    </main>
  );
}
