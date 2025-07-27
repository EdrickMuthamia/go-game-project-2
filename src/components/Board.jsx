import React from "react";
import Intersection from "./Intersection";
import "../styles/board.css";
import useGoGame from "../logic/useGoGame";

function Board() {
  const { 
    board, 
    currentPlayer, 
    capturedStones, 
    placeStone,
    getScore, 
    undoMove 
  } = useGoGame();

  // Create the 9x9 grid structure
  const grid = Array(9)
    .fill()
    .map((_, row) =>
      Array(9)
        .fill()
        .map((_, col) => ({ row, col }))
    );

  // Get the current score
  const score = getScore();

  return (
    <div className="board">
      {/* Scoreboard */}
      <div className="scoreboard">
        <p>Black Score: {score.black}</p>
        <p>White Score: {score.white}</p>
        <p>Current Player: {currentPlayer}</p>
        <p>Captured - Black: {capturedStones.black}, White: {capturedStones.white}</p>
        
        {/* Game control buttons */}
        <div className="game-controls">
          <button onClick={undoMove} className="control-button">
            Undo Move
          </button>
        </div>
      </div>
      
      {/* The game board */}
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Intersection
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              onClick={() => placeStone(rowIndex, colIndex)}
              value={board[rowIndex][colIndex]}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
