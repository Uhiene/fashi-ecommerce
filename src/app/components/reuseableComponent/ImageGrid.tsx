import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const ImageGrid: React.FC = () => {
  const images: string[] = [
    "/images/instagram/insta-1.jpg",
    "/images/instagram/insta-2.jpg",
    "/images/instagram/insta-3.jpg",
    "/images/instagram/insta-4.jpg",
    "/images/instagram/insta-5.jpg",
    "/images/instagram/insta-6.jpg",
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative group overflow-hidden h-56 md:h-72 bg-black w-full md:w-80"
        >
          <Image
            src={image}
            alt={`Instagram Image ${index + 1}`}
            width={500}
            height={400}
            className="object-cover object-top h-full"
          />
          <div
            className="absolute inset-0 flex justify-center items-center"
          >
            <div className="flex justify-center items-center h-full">
              <FaInstagram
                size={40}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
