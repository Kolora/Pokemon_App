import React from "react";

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

export default function Show({ pokemon }) {
  let name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  return (
    <div style={myStyle}>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{name}</h2>
      <img src={`${pokemon.img}.jpg`} alt="image of pokemon" />
      <br />
      <a href="/pokemon" style={{ color: "cyan", textDecoration: "none" }}>
        BACK
      </a>
    </div>
  );
}
