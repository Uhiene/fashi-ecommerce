"use client";
import React, { useState } from "react";
import DropdownMenu from "../reuseableComponent/DropdownMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu
  const pathname = usePathname();
  const dropdownItems = [
    { text: "Profile" },
    { text: "Settings" },
    { text: "Logout" },
  ];

  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/shop", text: "Shop" },
    { path: "/collection", text: "Collection" },
    { path: "/blog", text: "Blog" },
    { path: "/contact", text: "Contact" },
    { path: "/services", text: "Pages" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-gray-800 flex items-center justify-end lg:justify-center ">
      {/* Top Section */}
      <div className="hidden lg:block">
        <DropdownMenu label="All Departments" items={dropdownItems} />
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden block text-white hover:text-gray-400"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

      {/* Links Section */}
      <div
         className={`flex ${
          isMenuOpen ? "absolute bg-gray-800 left-0 w-full flex-col top-32 p-2" : "hidden sm:flex"
        } items-center justify-center`}
      >
        {navLinks.map(({ path, text }) => (
          <Link
            key={path}
            href={path}
            className={`${
              isActive(path) ? "bg-gold" : ""
            } text-white hover:text-gray-400 p-4 border-b border-gray-700 lg:border-none w-full h-full lg:w-40 text-center`}
          >
            {text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
