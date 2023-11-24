const apiUrl = "http://localhost:3000";

// app.js

function loadRecipes() {
  fetch(`${apiUrl}/recipes`)
    .then((response) => response.json())
    .then((recipes) => displayRecipes(recipes))
    .catch((error) => console.error("Error loading recipes:", error));
}

function displayRecipes(recipes) {
  const recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("div");
    recipeItem.innerHTML = `
        <h3>${recipe.title}</h3>
        <p>${recipe.ingredients}</p>
        <p>${recipe.instructions}</p>
        <button onclick="editRecipe('${recipe.id}')">Edit</button>
      `;
    recipeList.appendChild(recipeItem);
  });
}

function addRecipe() {
  // Implement this function to show a form for adding a new recipe
}

function editRecipe(id) {
  // Implement this function to show a form for editing an existing recipe
}

// app.js

function submitRecipe(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const ingredients = document.getElementById("ingredients").value;
  const instructions = document.getElementById("instructions").value;

  const newRecipe = {
    title,
    ingredients,
    instructions,
  };

  fetch(`${apiUrl}/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRecipe),
  })
    .then((response) => response.json())
    .then(() => {
      loadRecipes();
      resetRecipeForm();
    })
    .catch((error) => console.error("Error adding recipe:", error));
}

function submitEditedRecipe(event, id) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const ingredients = document.getElementById("ingredients").value;
  const instructions = document.getElementById("instructions").value;

  const editedRecipe = {
    title,
    ingredients,
    instructions,
  };

  fetch(`${apiUrl}/recipes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedRecipe),
  })
    .then((response) => response.json())
    .then(() => {
      loadRecipes();
      resetRecipeForm();
    })
    .catch((error) => console.error("Error editing recipe:", error));
}

function resetRecipeForm() {
  // Implement this function to reset the recipe form
}

// Implement any additional functions or modifications as needed
