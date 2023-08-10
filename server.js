const express = require("express");

const pokemon = require(":/models/pokemon");

const app = express();

const PORT = 3000;

// Load the create engine function
const jsxEngine = require("jsx-view-engine");

// // Load the method override function
// const methodOverride = require('method-override')

// Configure the view engine and look for files ending in jsx
app.set("view engine", "jsx");

// Create the engine and accept files ending in jsx
app.engine("jsx", jsxEngine());

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// app.get("/pokemon", (req, res)=>{
//     res.send(pokemon)
// })

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon });
});

app.get('/pokemon/:id', (req, res)=>
)

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
