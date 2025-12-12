import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Blog() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState(null);

  useEffect(() => {
    if (id) {
      // ✅ Fetch a single blog
      fetch(`http://localhost:5000/api/blogs/${id}`)
        .then((res) => res.json())
        .then((data) => setSingleBlog(data))
        .catch((err) => console.error("Error fetching single blog:", err));
    } else {
      // ✅ Fetch all blogs
      fetch("http://localhost:5000/api/blogs")
        .then((res) => res.json())
        .then((data) => setBlogs(data))
        .catch((err) => console.error("Error fetching blogs:", err));
    }
  }, [id]);

  // ✅ Single blog view
  if (id && singleBlog) {
    return (
      <section className="bg-zinc-900 text-white py-20 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Show image if available */}
          {singleBlog.imageUrl && (
            <img
              src={`http://localhost:5000/${singleBlog.imageUrl}`}
              alt={singleBlog.title}
              className="rounded-lg mb-6 w-full h-auto object-cover"
            />
          )}

          {/* Show video if available */}
          {singleBlog.videoUrl && (
            <video controls className="w-full rounded-lg mb-6">
              <source
                src={`http://localhost:5000/${singleBlog.videoUrl}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}

          <h2 className="text-3xl font-bold mb-4">{singleBlog.title}</h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {singleBlog.content}
          </p>

          <Link
            to="/blog"
            className="mt-8 inline-block text-blue-500 hover:underline"
          >
            ← Back to all blogs
          </Link>
        </div>
      </section>
    );
  }

  // ✅ All blogs view
  return (
    <section className="bg-zinc-900 text-white py-20 px-6 min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-12">Our Blogs</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            to={`/blog/${blog._id}`}
            key={blog._id}
            className="bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition transform duration-300"
          >
            {blog.imageUrl && (
              <img
                src={`http://localhost:5000/${blog.imageUrl}`}
                alt={blog.title}
                className="h-40 w-full object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-bold mb-2">{blog.title}</h3>
              <p className="text-sm text-zinc-400 mb-2">
                {blog.content.slice(0, 80)}...
              </p>
              <span className="text-blue-500 text-sm hover:underline">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
