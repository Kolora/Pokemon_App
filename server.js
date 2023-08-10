const express = require("express");

const pokemon = require("./models/pokemon");

const app = express();

const PORT = 3000;

// Load the create engine function
const jsxEngine = require("jsx-view-engine");

// Configure the view engine and look for files ending in jsx
app.set("view engine", "jsx");

// Create the engine and accept files ending in jsx
app.engine("jsx", jsxEngine());

app.get("/", (req, res) => {
  // console.log(pokemon)
  res.send("Welcome to the pokemon app");
});

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon });
});

app.get("/pokemon/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});
