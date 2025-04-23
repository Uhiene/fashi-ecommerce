"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import ProductCard from "../cards/ProductCard";

interface Product {
  name: string;
  category: string;
  image: string;
  price: string;
}

interface Products {
  [key: string]: Product[];
}

interface CategoryWithSwiperProps {
  type: "women" | "men";
}

const productsData: Products = {
  women: [
    {
      name: "T-Shirt",
      category: "Clothing",
      image: "/images/products/women/women-1.jpg",
      price: "$50",
    },
    {
      name: "Handbag",
      category: "Accessories",
      image: "/images/products/women/women-2.jpg",
      price: "$80",
    },
    {
      name: "Clothing",
      category: "Accessories",
      image: "/images/products/women/women-3.jpg",
      price: "$80",
    },
    {
      name: "Clothing",
      category: "Accessories",
      image: "/images/products/women/women-4.jpg",
      price: "$80",
    },
    {
      name: "Clothing",
      category: "Accessories",
      image: "/images/products/women/women-5.jpg",
      price: "$80",
    },
  ],
  men: [
    {
      name: "Sneakers",
      category: "Shoes",
      image: "/images/products/men/man-1.jpg",
      price: "$60",
    },
    {
      name: "Jacket",
      category: "Clothing",
      image: "/images/products/men/man-2.jpg",
      price: "$120",
    },
    {
      name: "Jacket",
      category: "Clothing",
      image: "/images/products/men/man-3.jpg",
      price: "$120",
    },
    {
      name: "Jacket",
      category: "Clothing",
      image: "/images/products/men/man-4.jpg",
      price: "$120",
    },
    {
      name: "Jacket",
      category: "Clothing",
      image: "/images/products/men/man-5.jpg",
      price: "$120",
    },
    {
      name: "Jacket",
      category: "Clothing",
      image: "/images/products/men/man-6.jpg",
      price: "$120",
    },
    {
      name: "Jacket",
      category: "Clothing",
      image: "/images/products/men/man-7.jpg",
      price: "$120",
    },
  ],
};



const CategoryWithSwiper: React.FC<CategoryWithSwiperProps> = ({ type }) => {
  // const [activeCategory, setActiveCategory] = useState<keyof Products>(type);

  const handleAddToCart = (product: Product) => {
    // Your logic for adding the product to cart
    console.log("Adding to cart:", product);
  };
  

  return (
    <div
      className={`flex flex-col lg:flex-row ${type === "women" ? "lg:flex-row" : "lg:flex-row-reverse"} w-full p-4 lg:p-10 gap-10`}
    >
      {/* Dynamic Image */}
      <div className="relative w-full lg:w-80 h-96">
        <Image
          src={`/images/products${
            type === "women" ? "/women/women-large.jpg" : "/men/man-large.jpg"
          }`}
          alt={`${type} category`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Slider Section */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl font-bold mb-6 capitalize">{type} Items</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 5000 }}
          className="category-swiper"
        >
          {productsData[type].map((product, index) => (
            <SwiperSlide key={index}>
              {/* Render the ProductCard Component */}
              <ProductCard product={product}   onAddToCart={handleAddToCart} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryWithSwiper;
