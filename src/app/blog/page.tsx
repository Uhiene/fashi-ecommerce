"use client";
import React from "react";
import BlogCard from "../components/cards/BlogCard";
import { blogData } from "../components/utils/BlogsData";

const BlogsPage = () => {
  return (
    <div className="flex justify-center pb-20">
      <div className="flex flex-col-reverse lg:flex-row gap-10 mt-6 lg:mt-14 w-full lg:w-[76%]">
        <aside className="lg:w-1/4 p-4 gap-10 grid grid-cols-2 lg:grid-cols-1 h-fit">
          <div>
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <h3 className="font-medium text-xl lg:text-2xl mb-2">Categories</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer text-gray-600 hover:text-yellow-500">Fashion</li>
              <li className="cursor-pointer text-gray-600 hover:text-yellow-500">Modeling</li>
              <li className="cursor-pointer text-gray-600 hover:text-yellow-500">Travel</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-xl lg:text-2xl mb-2">Recent Posts</h3>
            <ul>
              {blogData.map((card, index) => (
                <li key={index} className="flex items-center gap-4 mb-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-12 h-12 object-cover"
                  />
                  <p className="text-sm font-bold">{card.title}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-xl lg:text-2xl mb-2">Product Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Fashion", "Travel", "Lifestyle", "Modeling"].map(
                (tag, index) => (
                  <span
                    key={index}
                    className="border border-gray-200 px-2 py-1 text-sm cursor-pointer"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </aside>
        <main  className="w-full flex-1">
          <h1 className="text-3xl font-bold mb-6">Blogs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blogData.map((card, index) => (
              <BlogCard
                key={index}
                image={card.image}
                date={card.date}
                comments={card.comments}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BlogsPage;
