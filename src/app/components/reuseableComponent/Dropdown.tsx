"use client"
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownItemProps {
  image: string;
  text: string;
}

interface DropdownProps {
  items: DropdownItemProps[];
  label: string;
}

export default function Dropdown({ items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number>(0); // Track the selected item (default is 0)

  const handleItemClick = (index: number) => {
    setSelectedItem(index); // Update the selected item on click
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative">
      <button
        className="flex justify-between items-center w-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-2">
          <Image
            src={items[selectedItem].image} // Display the selected item image
            alt={items[selectedItem].text}
            width={24}
            height={24}
            className="w-6 h-3 object-cover"
          />
          <span className="text-gray-900 font-light text-sm">{items[selectedItem].text}</span>
        </span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <IoIosArrowDown />
        </span>
      </button>

      <ul className="absolute left-0 w-full mt-2 bg-white rounded-md shadow-md">
        {isOpen && (
          <li
            className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleItemClick(selectedItem === 0 ? 1 : 0)} // Toggle between 0 and 1
          >
            <span className="mr-3">
              <Image
                src={items[selectedItem === 0 ? 1 : 0].image} // Toggle the image based on selectedItem
                alt={items[selectedItem === 0 ? 1 : 0].text}
                width={24}
                height={24}
                className="w-6 h-3 object-cover"
              />
            </span>
            <span className="text-gray-900 font-light text-sm">
              {items[selectedItem === 0 ? 1 : 0].text} {/* Toggle the text based on selectedItem */}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
}
