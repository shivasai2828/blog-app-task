const Blog = require("../models/Blog.js");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const Blog = new Blog({ title, body });
    const savedPost = await Blog.save();

    res.json({
      Blog: savedPost,
    });
  } catch (err) {
    return res.status(400).json({
      error: "Error While Creating Post",
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    // const posts = await Post.find();
    const posts = await Blog.find()
      .populate("likes")
      .populate("comments")
      .exec();
    res.json({
      data: posts,
    });
  } catch (err) {
    return res.status(400).json({
      error: "Error while Fetching Post ",
    });
  }
};
