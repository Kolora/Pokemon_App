import React from "react";

function New() {
  return (
    <div>
      <h1>New</h1>
      <form action="/pokemon" method="POST">
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name"></input>
        <br />
        <br />
        <br />

        <label htmlFor="img">ImgURL:</label>
        <br />
        <input type="text" id="img" name="img"></input>
        <br />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default New;
