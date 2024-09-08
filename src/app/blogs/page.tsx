"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";
import React from "react";

const BlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();
  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl text-center my-5">
        All Blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-gray-400 text-center italic w-2/4 mx-auto">
        Dive into the fascinating world of quantum computing, where unlocking
        unprecedented computational power.
      </p>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs?.map((blog: Blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
