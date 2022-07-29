import React from 'react';
import Square from "./square";
import checkForWinner from './winner';

const Board = () => {
    // 1st player is 1
    // State keeps track of next player
    const [player, setPlayer] = React.useState(1);
    const [gameState, setGameState] = React.useState([]);
    let status = `Winner is: ${checkForWinner(gameState)}`;
    
    console.log(`We hav a winner ${status}`);

  
  
    // Note that Child (Square Component) calls this function
    // However the function has access to the player held here
    const takeTurn = (id) => {
      setGameState([...gameState, { id: id, player: player }]);
      setPlayer((player + 1) % 2); // get next player
      return player;
    };
    function renderSquare(i) {
      // use properties to pass callback function takeTurn to Child
      return <Square takeTurn={takeTurn} id={i}></Square>;
    }
  
    return (
      <div className="game-board">
        <div className="grid-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="grid-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="grid-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div id="info">
          <h1 id="turn" >Next Player: Player {(player === 1) ? 'X' : 'O'}</h1>
          <h1>{status}</h1>
        </div>
      </div>
    );
};

export default Board;