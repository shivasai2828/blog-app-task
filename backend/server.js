const express = require("express");

const blogRouter = require("./routes/blog-routes");
require("./config/db");
const cors = require("cors");
const dbConnect = require("./config/db");

const app = express();

app.use(cors());

app.set("view engine", "ejs");
app.use(express.json());

app.use("/api/blogs", blogRouter);

dbConnect();

app.use("/api", (req, res, next) => {
  res.send("hello");
});

//define port

app.listen(5001, () => console.log("app started at 5001..."));
