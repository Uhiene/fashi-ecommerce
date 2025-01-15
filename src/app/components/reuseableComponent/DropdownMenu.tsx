"use client"
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownItemProps {
  text: string;
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
        <ul className="absolute left-0 mt-2 w-full bg-white border rounded-md shadow-md">
          {items.map((item, index) => (
            <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
