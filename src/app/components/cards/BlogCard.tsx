import Image from "next/image";
import React from "react";
import { FaRegCalendar, FaRegComment } from "react-icons/fa";

interface BlogCardProps {
  image: string;
  date: string;
  comments: number;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  date,
  comments,
  title,
  description,
}) => {
  return (
    <div className="overflow-hidden">
      <Image
        src={image}
        alt={`Blog post titled "${title}"`}
        width={600}
        height={224}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 font-light">
            <FaRegCalendar className="text-gold" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 font-light">
            <FaRegComment className="text-gold" />
            <span>{comments}</span>
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700 font-light text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
