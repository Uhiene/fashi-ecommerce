"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Button from "../reuseableComponent/Button";

const HeroSwiper = () => {
  const heroImages = [
    "/images/hero-1.jpg", 
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
  ];

  
  const [slideIndex, setSlideIndex] = useState(0);

  
  const handleSlideChange = (swiper: any) => {
    setSlideIndex(swiper.activeIndex);
  };

  return (
    <div className="w-full lg:h-screen relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        onSlideChange={handleSlideChange} 
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[400px] lg:h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
              }} 
            >
              <div className="absolute left-10 lg:left-40 text-black inset-y-1/3 space-y-2 lg:space-y-4 lg:w-1/3 ">
                <motion.span
                  className="text-gold tracking-widest text-xs"
                  initial={{ opacity: 0, y: 100 }} 
                  animate={
                    slideIndex === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 100 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  BAGS, KIDS
                </motion.span>

                <motion.h1
                  className="font-bold text-3xl lg:text-7xl"
                  initial={{ opacity: 0, y: 100 }}
                  animate={
                    slideIndex === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 100 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Black Friday
                </motion.h1>

                <motion.p
                  className="text-gray-500 font-light"
                  initial={{ opacity: 0, y: 100 }}
                  animate={
                    slideIndex === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 100 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                  laboriosam. Lorem, ipsum dolor.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={
                    slideIndex === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 100 }
                  }
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Button
                    className={`bg-gold text-white ${
                      slideIndex === index ? "visible" : "invisible"
                    }`}
                  >
                    shop now
                  </Button>
                </motion.div>
              </div>
              <div className="hidden lg:absolute inset-x-[45%] inset-y-1/4">
                <motion.div
                  className="flex justify-center items-center w-40 h-40 rounded-full bg-gold"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={
                    slideIndex === index
                      ? { opacity: 1, rotate: 0 }
                      : { opacity: 0, y: 100 }
                  }
                  transition={{ duration: 1 }}
                >
                  <div className="flex flex-col justify-center  w-36 h-36 border-2 border-dashed border-white rounded-full text-center text-white font-bold text-3xl">
                    <p>SALE</p>
                    <p>50%</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
