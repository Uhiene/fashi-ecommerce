"use client"
import { motion } from "framer-motion";
import React from "react";

const CircleWithText = () => {
  return (
    <motion.div
      className="flex justify-center items-center w-40 h-40 rounded-full bg-gold"
      initial={{ opacity: 0, rotate: 90 }}  
      animate={{ opacity: 1, rotate: 0 }}   
      transition={{ duration: 1 }}          
    >
      <div className="flex flex-col justify-center  w-36 h-36 border-2 border-dashed border-white rounded-full text-center text-white font-bold text-3xl">
        <p>SALE</p>
        <p>50%</p>
      </div>
    </motion.div>
  );
};

export default CircleWithText;
