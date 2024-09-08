import BlogDetails from "@/components/ui/BlogDetails";
import { Blog, TBlogId } from "@/types";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(1, 3).map((blog: Blog) => {
    blogId: blog.id;
  });
};

const blogDetails = async ({ params }: TBlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  return (
    <div className="my-5">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default blogDetails;
