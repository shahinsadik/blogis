import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl text-center my-5">
        Latest Blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-gray-400 text-center italic w-2/4 mx-auto">
        Dive into the fascinating world of quantum computing, where unlocking
        unprecedented computational power.
      </p>
      <div className="grid grid-cols-2 gap-4 my-5">
        {blogs.slice(0,2).map((blog) => (
          <LatestBlogCard blog={blog} key={blog.id} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs.slice(2,5).map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
