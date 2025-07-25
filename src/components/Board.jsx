import React from "react";
import Intersection from "./Intersection";
import "../styles/board.css";
import useGoGame from "../logic/useGoGame";

function Board() {
  const { board, currentPlayer, placeStone } = useGoGame();

  const grid = Array(9)
    .fill()
    .map((_, row) =>
      Array(9)
        .fill()
        .map((_, col) => ({ row, col }))
    );

  const blackScore = board.flat().filter((value) => value === "black").length;
  const whiteScore = board.flat().filter((value) => value === "white").length;

  return (
    <div className="board">
      {/* Scoreboard */}
      <div className="scoreboard">
        <p>Black: {blackScore}</p>
        <p>White: {whiteScore}</p>
        <p>Current Player: {currentPlayer}</p>
      </div>
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
