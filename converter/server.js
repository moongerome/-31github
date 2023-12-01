const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/convert", async (req, res) => {
  const { from, to, amount, apiKey } = req.query;
  const apiUrl = `https://open.er-api.com/v6/convert?from=${from}&to=${to}&amount=${amount}&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
