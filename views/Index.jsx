  
//   class MyFirstComponent extends React.Component() {
//   return (
//     <div style={myStyle}>My First React Component!</div>;
//   }
//   }

import React from 'react';

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
  };

  export default  function Index(){
    return(
      <div style={myStyle}>
        <h1>See all the pokemon!</h1>
        <ul>
          {pokemon.map((poke)=><li>{poke.name[0].toUppercase().poke.name.slice(1)}</li>)}
        </ul>
      </div>
    )
  }




  