const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const postRoutes =
require("./routes/postRoutes");

const authRoutes =
require("./routes/authRoutes");

const commentRoutes =
require("./routes/commentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
process.env.MONGO_URI
)
.then(() =>
console.log("MongoDB Connected"))
.catch(err =>
console.log(err));

app.get("/", (req,res)=>{
  res.send(
  "BlogNest API Running"
  );
});

app.use("/api/posts",
postRoutes);

app.use("/api/auth",
authRoutes);

app.use("/api/comments",
commentRoutes);

const PORT =
process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log(
  `Server running on port ${PORT}`
  );
});