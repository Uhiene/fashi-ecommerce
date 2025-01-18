import BlogCard from "../cards/BlogCard";
import { blogData } from "../utils/BlogsData";

interface BlogCard {
  image: string;
  date: string;
  comments: number;
  title: string;
  description: string;
}
const Blog = () => {
 

  return (
      <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogData.map((card, index) => (
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