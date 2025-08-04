'use client';
import Image from "next/image";
import AnimatedContent from "../../ui/animatedContent";
import SplitText from "../../ui/splitText";

export default function ProcessSection() {
  const steps = [
    {
      title: "01. Site Analysis",
      icon: "/service/s1.webp",
    },
    {
      title: "02. Build Design",
      icon: "/service/s2.webp",
    },
    {
      title: "03. Engineering Solutions",
      icon: "/service/s3.webp",
    },
    {
      title: "04. Approvals + Certifications",
      icon: "/service/s4.png",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side - Steps */}
        <div className="flex-1">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-900">ABCON Process</h2>
          </div>
        <div className="border-l-4 border-l-blue-900 flex justify-center mx-auto  w-1 h-[60px] mb-6" />
        <AnimatedContent direction="vertical" reverse>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="border p-6 rounded-lg flex flex-col items-center bg-[#F8F8F8] text-center"
              >
                <Image src={step.icon} alt={step.title} width={60} height={60} />
                <p className="mt-6 text-gray-700">{step.title}</p>
              </div>
            ))}
          </div>
          </AnimatedContent>
        </div>

        {/* Right Side - Logos */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-32">
          <div className="text-lg text-gray-600 mb-4 mx-auto"> <SplitText text="ABCON are proud members of"/> </div>
          <div className="flex gap-6">
            <AnimatedContent direction="vertical" reverse>
            <Image src="/service/BDA_Logo.jpg" alt="Building Designers Australia" width={280} height={200} />
            </AnimatedContent>
             <AnimatedContent direction="vertical" reverse={false}>
            <Image src="/service/NER_Logo.jpg" alt="Engineers Australia NER" width={280} height={200} />
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
}
