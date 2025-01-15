import React from "react";
import HeroSwiper from "./components/home/HeroSwiper";
import Category from "./components/home/Category";
import CategoryWithSwiper from "./components/home/CategoryWithSwiper";
import WeeklyDeal from "./components/home/WeeklyDeal";
import ImageGrid from "./components/reuseableComponent/ImageGrid";
import Blog from "./components/home/Blog";

const page = () => {
  // const images = [
  //   "/images/instagram/insta-1.jpg",
  //   "/images/instagram/insta-2.jpg",
  //   "/images/instagram/insta-3.jpg",
  //   "/images/instagram/insta-4.jpg",
  //   "/images/instagram/insta-5.jpg",
  //   "/images/instagram/insta-6.jpg",
  // ];
  return (
    <div className="">
      <HeroSwiper />
      <Category/>
      <CategoryWithSwiper type="women" />
      <WeeklyDeal/>
      <CategoryWithSwiper type="men" />
      <ImageGrid  />
      <Blog/>
    </div>
  );
};

export default page;
