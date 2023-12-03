// server.js

const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();
const port = config.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.get("/convert", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/convert", async (req, res) => {
  const { amount, fromCurrency, toCurrency } = req.body;
  const apiKey = config.apiKey;
  const apiUrl = `https://open.er-api.com/v6/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json({ result: data.conversion_result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
