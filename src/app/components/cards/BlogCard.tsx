import React from "react";
import { FaCalendarAlt, FaComment } from "react-icons/fa";

interface BlogCardProps {
  image: string;
  date: string;
  comments: number;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, date, comments, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={`Blog post titled "${title}"`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <FaCalendarAlt className="mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <FaComment className="mr-2" />
          <span>{comments} Comments</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
