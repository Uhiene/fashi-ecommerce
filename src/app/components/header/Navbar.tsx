"use client";
import React, { useState } from "react";
import DropdownMenu from "../reuseableComponent/DropdownMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const dropdownItems = [
    { text: "Shopping Cart", path: "/cart" },
    { text: "Checkout", path: "/checkout" },
    { text: "Register", path: "/register" },
    { text: "Login", path: "/login" },
  ];

  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/collection", text: "Collection" },
    { path: "/blog", text: "Blog" },
    { path: "/contact", text: "Contact" },
  ];

  const isActive = (path: string) => pathname === path;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="lg:bg-darkGray flex items-center justify-end lg:justify-center">
      <div className="hidden lg:block">
        <DropdownMenu label="All Departments" items={dropdownItems} />
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden flex gap-2 text-daryGray hover:text-gold"
      >
        <IoMdMenu className="text-2xl" />
      </button>

      <div
        className={`flex ${
          isMenuOpen
            ? "absolute bg-darkGray left-0 w-full flex-col top-32 p-2 z-50"
            : "hidden sm:flex"
        } items-center justify-center`}
      >
        {navLinks.map(({ path, text }) => (
          <Link
            key={path}
            href={path}
            onClick={handleLinkClick} 
            className={`${
              isActive(path) ? "bg-gold" : ""
            } text-white p-4 border-b border-gray-500 w-full h-full lg:w-40 text-center lg:border-r `}
          >
            {text}
          </Link>
        ))}
        <DropdownMenu
          label="Pages"
          items={dropdownItems}
        />
      </div>
    </nav>
  );
};

export default Navbar;
