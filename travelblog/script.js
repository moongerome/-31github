document.addEventListener("DOMContentLoaded", function () {
  function addPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title && content) {
      const postContainer = document.createElement("div");
      postContainer.classList.add("post");

      const postTitle = document.createElement("h2");
      postTitle.textContent = title;

      const postContent = document.createElement("p");
      postContent.textContent = content;

      postContainer.appendChild(postTitle);
      postContainer.appendChild(postContent);

      document.querySelector("main").appendChild(postContainer);

      // Clear the form fields
      document.getElementById("title").value = "";
      document.getElementById("content").value = "";
    } else {
      alert("Please fill in both title and content fields.");
    }
  }
});
