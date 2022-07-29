import React from 'react';

const Square = ({ takeTurn, id }) => {
    const XorO = ['O', 'X', '+'];
    const [color, setColor] = React.useState('#40916c');
    const [filled, setFilled] = React.useState(false);
    const [tik, setTik] = React.useState(2);
  
    const toggle = ( e ) => {
      setColor(takeTurn(id));
      e.target.style.background = color;
      let newTik = takeTurn(tik);
      setTik(newTik);
      setFilled(true);
      console.log(`Square: ${id} filled by player : ${newTik}`);
      if(newTik !== 0) {
        e.target.style.color = 'red';
      } else if (newTik === 0) {
        e.target.style.color = 'white';
      }
      e.preventDefault();
    };
  
    return (
      <button
        onClick={ toggle }
      >
        <h1>{XorO[tik]}</h1>
        </button>
    );
  };

  export default Square;