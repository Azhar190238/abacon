"use client";
import { Drawer, Button } from "antd";
import { MenuOutlined, PhoneOutlined } from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCaretDownOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about" },
    {
      label: "Services",
      submenu: [
        { label: "Building Design Plans", link: "/services/1" },
        { label: "Civil Engineering", link: "/services/2" },
        { label: "Structural Engineering", link: "/services/3" },
        { label: "Survey and Site Analysis", link: "/services/4" },
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
        {/* Left Side: Logo + tagline */}
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
          {menuItems.map((item, i) =>
            item.submenu ? (
              <div key={i} className="group relative">
                <button className="flex items-center font-semibold text-[#1E2E8C] hover:text-blue-600">
                  {item.label} <IoCaretDownOutline className="ml-1 text-xs" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 min-w-[160px]">
                  {item.submenu.map((sub, j) => (
                    <Link
                      href={sub.link}
                      key={j}
                      className="block px-4 py-2 hover:bg-blue-100 whitespace-pre text-[#1E2E8C]"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={i}
                href={item.link}
                className="font-semibold text-[#1E2E8C] hover:text-blue-600"
              >
                {item.label}
              </Link>
            )
          )}

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

        {/* Mobile Menu Icon */}
        <Button
          type="text"
          className="lg:hidden"
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
        />
      </div>

      {/* Drawer for mobile */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        {menuItems.map((item, i) => (
          <div key={i} className="mb-4">
            {item.submenu ? (
              <details>
                <summary className="font-semibold cursor-pointer">
                  {item.label}
                </summary>
                <div className="ml-4 mt-2 space-y-1">
                  {item.submenu.map((sub, j) => (
                    <Link
                      key={j}
                      href={sub.link}
                      onClick={() => setOpen(false)}
                      className="block text-sm text-blue-700 hover:underline"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                href={item.link}
                onClick={() => setOpen(false)}
                className="block font-semibold"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
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
