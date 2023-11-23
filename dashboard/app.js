const express = require("express");
const app = express();

// Dummy data for social media posts
const posts = [
  { username: "user1", text: "This is post 1." },
  { username: "user2", text: "This is post 2." },
  { username: "user3", text: "This is post 3." },
];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
