// client/src/pages/Admin.jsx
import React, { useState } from "react";

const Admin = () => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    category: "",
    image: null,
    video: null,
  });

  const [preview, setPreview] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBlog({ ...blog, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setBlog({ ...blog, video: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!blog.title || !blog.description) {
      alert("Please fill all required fields!");
      return;
    }
    setBlogs([...blogs, blog]);
    setBlog({ title: "", description: "", category: "", image: null, video: null });
    setPreview(null);
    alert("Blog added successfully!");
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Admin Panel - Add Blog</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 p-6 rounded-lg max-w-xl mx-auto shadow-lg space-y-4"
      >
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="w-full p-3 rounded bg-zinc-700 text-white outline-none"
          required
        />

        <textarea
          name="description"
          value={blog.description}
          onChange={handleChange}
          placeholder="Blog Description"
          rows="4"
          className="w-full p-3 rounded bg-zinc-700 text-white outline-none"
          required
        ></textarea>

        <input
          type="text"
          name="category"
          value={blog.category}
          onChange={handleChange}
          placeholder="Category (optional)"
          className="w-full p-3 rounded bg-zinc-700 text-white outline-none"
        />

        <div>
          <label className="block mb-1 text-gray-400">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-gray-300"
          />
        </div>

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-3 rounded-lg w-full h-48 object-cover"
          />
        )}

        <div>
          <label className="block mb-1 text-gray-400">Upload Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="block w-full text-gray-300"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded w-full font-semibold"
        >
          Add Blog
        </button>
      </form>

      <div className="mt-10 max-w-3xl mx-auto">
        <h3 className="text-2xl mb-4">Uploaded Blogs</h3>
        <div className="space-y-4">
          {blogs.map((b, index) => (
            <div key={index} className="bg-zinc-800 p-4 rounded-lg">
              <h4 className="text-xl font-semibold">{b.title}</h4>
              <p className="text-gray-300">{b.description}</p>
              {b.image && (
                <img
                  src={URL.createObjectURL(b.image)}
                  alt="Blog"
                  className="mt-2 rounded-lg w-full h-48 object-cover"
                />
              )}
              {b.video && (
                <video
                  src={URL.createObjectURL(b.video)}
                  controls
                  className="mt-2 w-full rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
