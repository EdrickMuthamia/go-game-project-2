// src/components/Board.jsx
import React from "react";
import Intersection from "./Intersection";
import "../styles/board.css";
import "../logic/useGoGame";;

function Board() {
    
  // 9x9 grid represented as a 2D array
  const grid = Array(9)
    .fill()
    .map((_, row) =>
      Array(9)
        .fill()
        .map((_, col) => ({ row, col }))
    );

  return (
    <div className="board">
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Intersection
              key={`${rowIndex}-${colIndex}`}
              row={cell.row}
              col={cell.col}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
export default Board;
