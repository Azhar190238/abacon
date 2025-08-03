'use client';
import Free_Consultation from "@/app/components/landing/home/free_initial";
import CommonHeader from "../../components/common/common_section";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Check all fields filled
    if (!name || !email || !message) {
      Swal.fire({
        icon: "error",
        title: "All fields are required",
      });
      return;
    }

    // Email validation
    if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address",
      });
      return;
    }

    // Success Alert
    Swal.fire({
      icon: "success",
      title: "Message Sent",
      text: "Thanks for reaching out!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="">
      <CommonHeader heading="Contact Us" />
      <div className="container my-6 md:my-8 xl:my-10">
        <Image
          src="/service/Banner_Services.jpg"
          width={1000}
          height={1000}
          alt="Background"
          className="w-full h-[215px]"
        />
        <div className="flex flex-col md:flex-row gap-10 px-6 py-10 max-w-[1200px] mx-auto">
          {/* Left side - Map */}
          <div className="w-full md:w-1/2 min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.0132512999585!2d151.03100617644193!3d-33.91505852145752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bc106e955555%3A0x427fbdeadc77de3e!2sLevel%204%2C%20Suite%204%2F402-410%20Chapel%20Rd%2C%20Bankstown%20NSW%202200%2C%20Australia!5e0!3m2!1sen!2sbd!4v1754239933956!5m2!1sen!2sbd"
              className="w-full h-full rounded"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right side - Info + Form */}
          <div className="w-full md:w-1/2 min-h-[450px] flex flex-col justify-between text-[#1F1F1F]">
            <div className="space-y-6">
              <p className="text-sm leading-relaxed">
                ABCON are design, civil and structural specialists consulting
                firm with over 10 years of experience. All our design solutions
                are creative, innovative and uniquely catered for our client’s
                specific needs. We would love to hear and meet you to discuss
                your wonderful project.
              </p>

              <hr className="border-l-2 border-[#0F74BA] w-6" />

              <div>
                <h4 className="font-semibold mb-2">Contact Details</h4>
                <p>Phone: (02) 8768 0561</p>
                <p>Email: info@abcon.com.au</p>
                <p>
                  Address: Suite 4, Level 4 402-410 Chapel Road Bankstown
                  postcode 2200
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Trading Hours</h4>
                <p>Monday – Friday: 8:30am – 5:00pm</p>
                <p>Saturday: By appointment only</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="flex-1 border-b border-gray-400 focus:outline-none px-2 py-1"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="flex-1 border-b border-gray-400 focus:outline-none px-2 py-1"
                />
              </div>
              <textarea
                rows="4"
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border-b border-gray-400 focus:outline-none px-2 py-1"
              ></textarea>
              <button
                type="submit"
                className="bg-[#0F2F8F] text-white px-6 py-2 rounded hover:bg-[#0d2673] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Free_Consultation />
    </main>
  );
}
