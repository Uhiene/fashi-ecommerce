import React from "react";
import HeroSwiper from "./components/home/HeroSwiper";
import Category from "./components/home/Category";
import CategoryWithSwiper from "./components/home/CategoryWithSwiper";
import WeeklyDeal from "./components/home/WeeklyDeal";
import ImageGrid from "./components/reuseableComponent/ImageGrid";
import Blog from "./components/home/Blog";

const page = () => {
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
