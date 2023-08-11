const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});
//takes two arguments, first argument collection
const pokemon = mongoose.model("Pokemon", PokemonSchema);
module.exports = pokemon;
