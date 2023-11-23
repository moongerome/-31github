document.addEventListener("DOMContentLoaded", function () {
  const postsContainer = document.getElementById("posts-container");

  // Fetch posts from the server
  fetch("/api/posts")
    .then((response) => response.json())
    .then((posts) => {
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
