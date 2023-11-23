document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded.");

  const postsContainer = document.getElementById("posts-container");

  // Fetch posts from the server
  fetch("http://localhost:3000/api/posts") // Update the URL here
    .then((response) => {
      console.log("Response status:", response.status);
      return response.json();
    })
    .then((posts) => {
      console.log("Fetched posts:", posts);
      // Display posts in the container
      posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<strong>${post.username}</strong>: ${post.text}`;
        postsContainer.appendChild(postElement);
      });
    })
    .catch((error) => console.error("Error fetching posts:", error));
});
