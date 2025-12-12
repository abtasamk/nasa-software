import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FeaturedBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <div className="bg-gray-900 text-white py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Featured Blogs</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.length === 0 ? (
          <p className="text-gray-400">No blogs available yet.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className="bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-400 mb-3">{blog.content.slice(0, 100)}...</p>

              {/* ✅ Display Image (if available) */}
              {blog.imageUrl && (
                <img
                  src={`http://localhost:5000/${blog.imageUrl}`}
                  alt={blog.title}
                  className="rounded-md mb-3 w-full h-48 object-cover"
                />
              )}

              {/* ✅ Display Video (if available) */}
              {blog.videoUrl && (
                <video controls className="w-full rounded-md mb-3">
                  <source
                    src={`http://localhost:5000/${blog.videoUrl}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))
        )}
      </div>

      <Link
        to="/blog"
        className="inline-block mt-8 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        View All Blogs
      </Link>
    </div>
  );
}
