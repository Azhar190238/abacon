
import CommonHeader from "@/app/components/common/common_section";
import Free_Initial from '@/app/components/landing/home/free_initial'
import ServicesSection from "@/app/components/landing/home/services";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";


export default function OurService() {
   const servicesData = [
      {
         title: "01. Site Analysis",
         description:
            "Visit our certified team of managers. We work out the best solution for your project and site We have competitive prices that suit all budgets.",
         image: "/process/p1.png",
      },
      {
         title: "02. Building Design",
         description:
            "We organise the surveying, designing, supervision of all architectural solutions. Custom designed dwellings with unique 3D renders on suit.",
         image: "/process/p2.png",
      },
      {
         title: "03. Engineering Solutions",
         description:
            "We organise the surveying, designing, supervision of all architectural solutions. Custom designed dwellings with unique 3D renders on suit.",
         image: "/process/p3.png",
      },
      {
         title: "04. Approvals + Certification",
         description:
            "Our team at ABCON will take the headache off you, We will manage the entire approval process.",
         image: "/process/p4.png",
      }
   ];
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
            <div className="mt-5 md:mt-8 xl:mt-10">
               <p className="max-w-[554px]">
                  At Abcon we work on a variety of services to help get your job done. Below are some of our services which you can inquire about. If you have any further questions, please do not hesitate to get in contact with one of our staff.
               </p>
            </div>
            <Link href={"/contact_us"}>
               <div className="mt-5 md:mt-8 xl:mt-10 flex items-center justify-center">
                  <buton className="px-5 py-3 text-white text-base font-semibold bg-gradient-to-l from-[#1C72B5] to-[#1E317E] bg-[length:200%_200%] transition-all duration-500 ease-in-out hover:animate-gradient-x">
                     Get Your Free Innitial Custaltation Now
                  </buton>
               </div>
            </Link>
         </div>
         <div className="mt-6 md:mt-8 xl:mt-11 py-5 md:py-8 xl:py-10 bg-[#EEEEEE]">
            <ServicesSection />
         </div>
         <div className="mt-5 md:mt-8 xl:mt-10 container">
            <h2 className="text-3xl font-bold text-blue-900 text-center">Abcon Process</h2>
            <hr className="border-l-[2px] mx-auto border-blue-900 w-[2px] h-[60px] my-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch justify-center gap-16 relative">
               {servicesData.map((item, index) => (
                  <div
                     key={index}
                     className="group relative bg-[#F8F8F8] border-2 border-gray-300 p-5 w-full md:max-w-[260px] flex flex-col items-center text-center"
                  >
                     <div className="w-12 h-12 mb-4">
                        <Image
                           src={item.image}
                           alt={item.title}
                           width={48}
                           height={48}
                           className="object-contain w-full h-full group-hover:scale-125 transition-all duration-300"
                        />
                     </div>
                     <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                     <p className="mt-4 md:mt-5 lg:mt-8 text-sm text-gray-700">{item.description}</p>

                     {/* Arrow (except last item) */}
                     {index !== servicesData.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 right-[-62px] transform -translate-y-1/2">
                           <BsArrowRight className="text-6xl" />
                        </div>
                     )}
                  </div>
               ))}
            </div>

         </div>
         <div className="mt-6 md:mt-8 lg:mt-9">
            <Free_Initial />
         </div>
      </main>
   );
}
