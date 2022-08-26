const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://kalyan1234:123@cluster1.vayeumu.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Database");
  })
  .catch(() => {
    console.log("error occured");
  });

const Post = require("./Models/Post");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,x-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,PUT,OPTIONS"
  );
  next();
});
app.get("/api/posts", (req, res) => {
  const posts = [
    {
      id: 1,
      Name: "Kalyan1",
      Email: "Kalyan1@gmail.com",
      PhoneNumber: 7075021707,
    },
    {
      id: 2,
      Name: "Kalyan2",
      Email: "Kalyan2@gmail.com",
      PhoneNumber: 7075021707,
    },
    {
      id: 2,
      Name: "Kalyan3",
      Email: "Kalyan3@gmail.com",
      PhoneNumber: 7075021707,
    },
  ];
  res.status(200).json({ message: "Post fetched successfully", post: posts });
  next();
});

app.post("/api/post", (req, res, next) => {
  const post = new Post({
    Name: req.body.Name,
    Email: req.body.Email,
    PhoneNumber: req.body.PhoneNumber,
  });
  post.save();
  res.status(201).json({
    message: "Post created Successfully",
  });
});

app.listen(3000, () => {
  console.log("server is running");
});
