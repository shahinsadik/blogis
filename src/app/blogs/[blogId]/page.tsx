import BlogDetails from "@/components/ui/BlogDetails";
import { TBlogId } from "@/types";

const blogDetails = async ({ params }: TBlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`);
  const blog = await res.json();

  return (
    <div className="my-5">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default blogDetails;
