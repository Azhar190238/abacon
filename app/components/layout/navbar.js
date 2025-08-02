"use client";
import { Drawer, Button } from "antd";
import { MenuOutlined, PhoneOutlined } from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCaretDownOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about" },
    {
      label: "Services",
      link: "/service",
      submenu: [
        { label: "Building Design Plans", link: "/service_building" },
        { label: "Civil Engineering", link: "/service_civil" },
        { label: "Structural Engineering", link: "/service_structural" },
        { label: "Survey and Site Analysis", link: "/service_survey" },
        { label: "Certifications and Approvals", link: "/service_certification" },

      ],
    },
    {
      label: "Gallery",
      submenu: [
        { label: "Gallery 1", link: "/gallery/1" },
        { label: "Gallery 2", link: "/gallery/2" },
      ],
    },
    { label: "Contact Us", link: "/contact" },
  ];

  return (
    <div className="w-full border-b px-4 py-3 relative">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={65}
            className="h-16 w-[180px]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map((item, i) => {
            const isActive =
              pathname === item.link ||
              (item.submenu &&
                item.submenu.some((sub) => pathname.startsWith(sub.link)));

            return item.submenu ? (
              <div key={i} className="group relative">
                {item.link ? (
                  <Link
                    href={item.link}
                    className={`flex items-center font-semibold ${
                      isActive ? "text-red-600" : "text-[#1E2E8C] hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                    <IoCaretDownOutline className="ml-1 text-xs" />
                  </Link>
                ) : (
                  <button
                    className={`flex items-center font-semibold ${
                      isActive ? "text-red-600" : "text-[#1E2E8C] hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                    <IoCaretDownOutline className="ml-1 text-xs" />
                  </button>
                )}
                <div className="absolute top-full left-0 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 min-w-[160px]">
                  {item.submenu.map((sub, j) => (
                    <Link
                      href={sub.link}
                      key={j}
                      className={`block px-4 py-2 hover:bg-blue-100 whitespace-pre ${
                        pathname === sub.link ? "text-red-600" : "text-[#1E2E8C]"
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : item.link ? (
              <Link
                key={i}
                href={item.link}
                className={`font-semibold ${
                  isActive ? "text-red-600" : "text-[#1E2E8C] hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span key={i} className="font-semibold text-[#1E2E8C]">
                {item.label}
              </span>
            );
          })}

          {/* Phone Button */}
          <a
            href="tel:(02) 8768 0561"
            className="relative inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold text-white
             bg-gradient-to-r from-[#1C72B5] to-[#1E317E] 
             bg-[length:200%_200%] transition-all duration-500 ease-in-out
             hover:animate-gradient-x"
          >
            <PhoneOutlined className="mr-2" />
            (02) 8768 0561
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          type="text"
          className="lg:hidden"
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
        />
      </div>

      {/* Drawer Menu (Mobile) */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        {menuItems.map((item, i) => {
          const isActive =
            pathname === item.link ||
            (item.submenu &&
              item.submenu.some((sub) => pathname.startsWith(sub.link)));

          return (
            <div key={i} className="mb-4">
              {item.submenu ? (
                <details open={isActive}>
                  <summary
                    className={`font-semibold cursor-pointer ${
                      isActive ? "text-red-600" : "text-gray-800"
                    }`}
                  >
                    {item.link ? (
                      <Link
                        href={item.link}
                        onClick={() => setOpen(false)}
                        className="inline-block w-full"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </summary>
                  <div className="ml-4 mt-2 space-y-1">
                    {item.submenu.map((sub, j) => (
                      <Link
                        key={j}
                        href={sub.link}
                        onClick={() => setOpen(false)}
                        className={`block text-sm hover:underline ${
                          pathname === sub.link
                            ? "text-red-600"
                            : "text-blue-700"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : item.link ? (
                <Link
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className={`block font-semibold ${
                    isActive ? "text-red-600" : "text-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="block font-semibold text-gray-800">
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
        <div className="mt-4">
          <a
            href="tel:(02) 8768 0561"
            className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full font-semibold"
          >
            <PhoneOutlined className="mr-2" />
            (02) 8768 0561
          </a>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
