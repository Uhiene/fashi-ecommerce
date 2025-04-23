"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/banner-1.jpg", alt: "Category 1" },
  { src: "/images/banner-2.jpg", alt: "Category 2" },
  { src: "/images/banner-3.jpg", alt: "Category 3" },
];

const Category = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 p-4 lg:p-20">
      {images.map((image, index) => (
        <div key={index} className="relative group w-full lg:w-1/3">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            className="w-full h-full object-cover bg-white"
          />
          <motion.div
            className="absolute inset-0"
            initial={{
              scale: 0,
              opacity: 0,
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            whileHover={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            style={{
              border: "2px dashed rgba(128, 128, 128, 0.7)", 
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Category;
