"use client"
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownItemProps {
  text: string;
  path: string;
}

interface DropdownProps {
  items: DropdownItemProps[];
  label: string;
}

const DropdownMenu = ({ items, label }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 text-white p-2 rounded-md"
      >
        <span>{label}</span>
        <IoIosArrowDown
          className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-44 p-4 space-y-4 bg-darkGray text-white z-40">
          {items.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-gold">
            <Link href={item.path}>{item.text}</Link>
          </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
