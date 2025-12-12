import express from "express";
import multer from "multer";
import Blog from "../models/blogModel.js";

const router = express.Router();

// Storage setup for uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// Create new blog
router.post("/", upload.fields([{ name: "image" }, { name: "video" }]), async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.files.image ? req.files.image[0].path : "";
    const video = req.files.video ? req.files.video[0].path : "";

    const newBlog = new Blog({ title, description, image, video });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all blogs
router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

export default router;
