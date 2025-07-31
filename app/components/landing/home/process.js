import Image from "next/image";

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
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side - Steps */}
        <div className="flex-1">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-900">ABCON Process</h2>
          </div>
        <div className="border-l-4 border-l-blue-900 flex justify-center mx-auto  w-1 h-[60px] mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        </div>

        {/* Right Side - Logos */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-32">
          <p className="text-sm text-gray-600 mb-4">ABCON are proud members of</p>
          <div className="flex gap-6">
            <Image src="/service/BDA_Logo.jpg" alt="Building Designers Australia" width={280} height={200} />
            <Image src="/service/NER_Logo.jpg" alt="Engineers Australia NER" width={280} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
}
