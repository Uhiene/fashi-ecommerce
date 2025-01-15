import Image from "next/image";
import React from "react";
import Button from "./Button";

const Footer = () => {
  const images = [
    "/images/logo-carousel/logo-1.png",
    "/images/logo-carousel/logo-2.png",
    "/images/logo-carousel/logo-3.png",
    "/images/logo-carousel/logo-4.png",
    "/images/logo-carousel/logo-5.png",
  ];
  return (
    <div>
      <div className="bg-neutral-700 flex justify-between gap-5 sm:gap-10 items-center overflow-x-scroll sm:overflow-x-auto p-4 lg:p-10 lg:px-40 ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Footer Image ${index + 1}`}
            className="w-20 sm:w-auto"
          />
        ))}
      </div>
      <div className="bg-zinc-900 py-14 px-4 lg:p-10 lg:px-40 flex flex-col lg:flex-row justify-between items-start gap-10 sm:gap-0">
        <div>
          <Image
            src="/images/footer-logo.png"
            alt=""
            className="w-24 "
            width={200}
            height={200}
          />
          <div className="text-base text-zinc-400 space-y-3 mt-3 sm:mt-6 w-60 font-light">
            <p>Address: 60-49 Road 11378 New York</p>
            <p>Phone: +65 11.188.888</p>
            <p>Email: hello.colorlib@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-medium">Information</h2>
          <div className="text-base text-zinc-400 space-y-3 mt-3 sm:mt-6 w-60 font-light">
            <p>About Us</p>
            <p>Checkout</p>
            <p>Contact</p>
            <p>Services</p>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-medium">My Account</h2>
          <div className="text-base text-zinc-400 space-y-3 mt-3 sm:mt-6 w-60 font-light">
            <p>My Account</p>
            <p>Checkout</p>
            <p>Shopping Cart</p>
            <p>Shop</p>
          </div>
        </div>
        <div className="space-y-4 w-full">
          <h2 className="text-white text-lg font-medium">
            Join Our Newsletter Now
          </h2>
          <p className="text-base text-zinc-400 space-y-3 mt-6 w-80 font-light">
            Get E-mail updates about our latest shop and special offers.
          </p>
          <div className="flex justify-between w-full md:w-80 bg-neutral-700 bg-opacity-75  text-neutral-700 focus:outline-none focus:ring-2 focus:ring-gold">
            <input
              type="text"
              placeholder="Enter your mail"
              className="flex-1 px-4 p-2 placeholder:font-light bg-transparent"
            />
           <Button className={`bg-gold text-white px-4 p-2`}>subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
