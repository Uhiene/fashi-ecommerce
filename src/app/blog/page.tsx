"use client";
import React from "react";
import BlogCard from "../components/cards/BlogCard";

const BlogsPage = () => {
  const blogCards = [
    {
      image: "/images/blog/blog-1.jpg",
      date: "January 14, 2025",
      comments: 5,
      title: "Understanding the Basics of Web Development",
      description:
        "A comprehensive guide to the foundational concepts of web development and how to get started.",
    },
    {
      image: "/images/blog/blog-2.jpg",
      date: "January 13, 2025",
      comments: 3,
      title: "Exploring the Power of React",
      description:
        "Learn how React can help you build dynamic and efficient user interfaces.",
    },
    {
      image: "/images/blog/blog-3.jpg",
      date: "January 12, 2025",
      comments: 7,
      title: "Mastering Tailwind CSS for Custom Designs",
      description:
        "Tailwind CSS is a utility-first framework that makes creating custom designs easier than ever.",
    },
  ];

  return (
    <div className="flex p-4 gap-10">
      <aside className="w-1/4 bg-gray-100 p-4 rounded-lg">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-6">
          <h3 className="font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-blue-500">Fashion</li>
            <li className="cursor-pointer hover:text-blue-500">Modeling</li>
            <li className="cursor-pointer hover:text-blue-500">Travel</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-bold mb-4">Recent Posts</h3>
          <ul>
            {blogCards.map((card, index) => (
              <li key={index} className="flex items-center mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-12 h-12 object-cover rounded-lg mr-4"
                />
                <p className="text-sm">{card.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Product Tags</h3>
          <div className="flex flex-wrap gap-2">
            {["Fashion", "Travel", "Lifestyle", "Modeling"].map(
              (tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-2 py-1 text-sm rounded-lg cursor-pointer hover:bg-gray-300"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </aside>
      <main className="w-3/4">
        <h1 className="text-3xl font-bold mb-6">Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogCards.map((card, index) => (
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
  );
};

export default BlogsPage;
