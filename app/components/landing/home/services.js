"use client";
import Image from "next/image";

const services = [
  {
    title: "Building Design Plans",
    description:
      "We at ABCON ensure that every design is convened to the best level both aesthetically and conventionally to our client’s preferences.",
    image: "/service/s1.webp",
  },
  {
    title: "Civil Engineering",
    description:
      "Our team of Engineers guarantee cost effective and approvable designs for all projects. Click on the below to find out more information",
    image: "/service/s2.webp",
  },
  {
    title: "Structural Engineering",
    description:
      "We have a holistic approach to Structural Design. An iterative method is employed in delivering functional, easy-to-build and feasible designs.",
    image: "/service/s3.webp",
  },
  {
    title: "Survey and Site Analysis",
    description:
      "At ABCON we can organise a survey of your property to ensure an accurate design. To find out more information, give us a call or click here.",
    image: "/service/s4.png",
  },
  {
    title: "Certifications and Approvals",
    description:
      "We offer full engineering certification of all proposed and existing structural works. Click on the below to find out more information",
    image: "/service/s5.webp",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-[1230px] mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">Our Services</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Below are some of our services ranging from Engineering and Architectural Building Design. Click on the below to find out more information.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded shadow hover:shadow-lg transition duration-300 border-l-4 border-blue-900"
            >
              <div className="mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-700 text-center">{service.description}</p>
            </div>
          ))}
          <div
              
              className="bg-white p-6 flex flex-col justify-center items-center rounded shadow bg-gradient-to-r from-[#1C72B5] to-[#1E317E] 
             bg-[length:200%_200%] transition-all duration-500 ease-in-out
             hover:animate-gradient-x hover:shadow-lg transition duration-300 border-l-4 border-blue-900"
            >
              <div className="mb-4 flex items-center justify-center">
                <Image
                  src= "/service/s6.png"
                  alt="call"
                  width={60}
                  height={60}
                  className="object-contain mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#91B276] mb-3 text-center">Contact Us</h3>
            </div>
        </div>
        
      </div>
    </section>
  );
}
