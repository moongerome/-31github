const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

let recipes = [];

app.use(bodyParser.json());

app.get("/recipes", (req, res) => {
  res.json(recipes);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  const recipe = recipes.find((r) => r.id === id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send("Recipe not found");
  }
});

app.post("/recipes", (req, res) => {
  const newRecipe = req.body;
  newRecipe.id = generateRecipeId();
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

app.put("/recipes/:id", (req, res) => {
  const id = req.params.id;
  const updatedRecipe = req.body;
  const index = recipes.findIndex((r) => r.id === id);
  if (index !== -1) {
    recipes[index] = updatedRecipe;
    res.json(updatedRecipe);
  } else {
    res.status(404).send("Recipe not found");
  }
});

function generateRecipeId() {
  return "recipe_" + Date.now();
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
