import Image from "next/image";

export default function ProcessSection() {
  const steps = [
    {
      title: "01. Site Analysis",
      icon: "/icons/site-analysis.png",
    },
    {
      title: "02. Build Design",
      icon: "/icons/build-design.png",
    },
    {
      title: "03. Engineering Solutions",
      icon: "/icons/engineering-solutions.png",
    },
    {
      title: "04. Approvals + Certifications",
      icon: "/icons/approvals.png",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side - Steps */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">ABCON Process</h2>
            <div className="w-px h-8 bg-blue-900" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="border p-6 rounded-lg flex flex-col items-center text-center"
              >
                <Image src={step.icon} alt={step.title} width={40} height={40} />
                <p className="mt-4 text-gray-700">{step.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Logos */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-sm text-gray-600 mb-4">ABCON are proud members of</p>
          <div className="flex flex-col gap-6">
            <Image src="/logos/bda.png" alt="Building Designers Australia" width={180} height={60} />
            <Image src="/logos/ner.png" alt="Engineers Australia NER" width={180} height={60} />
          </div>
        </div>
      </div>
    </section>
  );
}
