"use client";
import Image from "next/image";

export default function BenefitsSection() {
  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1230px] mx-auto px-4">

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Benefit 1 */}
          <div className="p-6 border-l-4 border-blue-900 bg-blue-50 rounded hover:shadow-lg transition duration-300 ease-in-out">
            {/* Logo/Icon */}
            <div className="mb-4">
              <Image
                src="/logo1.png" // Replace with your own icon
                alt="Interior Expertise"
                width={50}
                height={50}
              />
            </div>

            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Interior Expertise
            </h3>
            <p className="text-gray-700">
              Our qualified team of registered Designers and Engineers have
              extensive expertise in residential, commercial and industrial
              projects.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="p-6 border-l-4 border-blue-900 bg-blue-50 rounded hover:shadow-lg transition duration-300 ease-in-out">
            {/* Logo/Icon */}
            <div className="mb-4">
              <Image
                src="/logo2.webp" // Replace with your own icon
                alt="Free Consultation"
                width={50}
                height={50}
              />
            </div>

            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Free Consultation
            </h3>
            <p className="text-gray-700">
              We offer a free consultation to our clients to work out the best
              solution for your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
