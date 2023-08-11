const express = require("express");

const pokemon = require("./models/pokemon");

const app = express();

const PORT = 3000;

const Pokemon = require("./models/Pokemons");

const methodOverride = require("method-override");

app.use(methodOverride("_method"));

// A middleware that formats the data into an object we can use on req.body
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();
const mongoConfig = require("./Config");
mongoConfig();

// Load the create engine function
const jsxEngine = require("jsx-view-engine");

// Configure the view engine and look for files ending in jsx
app.set("view engine", "jsx");

// Create the engine and accept files ending in jsx
app.engine("jsx", jsxEngine());

async function sendData(data, database) {
  let currentData;
  try {
    currentData = await Pokemon.find();
    console.log(currentData);
  } catch (err) {
    console.log("Failed to get pokemon", err);
  }
  if (currentData != []) {
    try {
      let pokemon = await database.create(data);
      console.log(pokemon);
    } catch (err) {
      console.log("Failed to create a pokemon document: ", err);
    }
  }
}

app.get("/", (req, res) => {
  // console.log(pokemon)
  res.send("Welcome to the pokemon app");
});

// app.get("/pokemon", (req, res) => {
//   res.render("Index", { pokemon });
// });
sendData(pokemon, Pokemon);
app.get("/pokemon", async (req, res) => {
  let pokemon;
  try {
    pokemon = await Pokemon.find();
    console.log(pokemon);
  } catch (err) {
    console.log("Failed to get pokemon", err);
  }

  res.render("Index", { pokemon });
});

// app.get("/pokemon/:id", (req, res) => {
//   res.render("Show", { pokemon: pokemon[req.params.id] });
// });

app.get("/pokemon/new", async (req, res) => {
  res.render("New");
});

app.post("/pokemon", async (req, res) => {
  console.log(req.body);
  try {
    let pokemon = await Pokemon.create(req.body);
    console.log(pokemon, "--------------------------------");
  } catch (err) {
    console.log("Failed to create a Pokemon document: ", err);
  }

  // Pokemons.push(req.body)
  res.redirect("/pokemon");
});

app.get("/pokemon/:id", async (req, res) => {
  let pokemon;
  try {
    pokemon = await Pokemon.findById(req.params.id);
    console.log(pokemon);
  } catch (err) {
    console.log(
      "Failed to find pokemon document with id " + req.params.id,
      err
    );
  }

  if (pokemon) {
    res.render("Show", { pokemon });
  } else {
    res.redirect("/pokemon");
  }
});

app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`, process.env.MONGO_URL);
});
