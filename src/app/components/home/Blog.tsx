import BlogCard from "../cards/BlogCard";

interface BlogCard {
  image: string;
  date: string;
  comments: number;
  title: string;
  description: string;
}
const Blog = () => {
    const blogCards: BlogCard[] = [
        {
          image: "/images/blog/blog-1.jpg",
          date: "January 14, 2025",
          comments: 5,
          title: "Understanding the Basics of Web Development",
          description: "A comprehensive guide to the foundational concepts of web development and how to get started.",
        },
        {
          image: "/images/blog/blog-2.jpg",
          date: "January 13, 2025",
          comments: 3,
          title: "Exploring the Power of React",
          description: "Learn how React can help you build dynamic and efficient user interfaces.",
        },
        {
          image: "/images/blog/blog-3.jpg",
          date: "January 12, 2025",
          comments: 7,
          title: "Mastering Tailwind CSS for Custom Designs",
          description: "Tailwind CSS is a utility-first framework that makes creating custom designs easier than ever.",
        },
      ];

  return (
      <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogCards.map((card, index) => (
          <BlogCard key={index}
          image={card.image}
          date={card.date}
          comments={card.comments}
          title={card.title}
          description={card.description}/>
        ))}
      </div>
    </div>
  )
}

export default Blog