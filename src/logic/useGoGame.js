//// src/logic/useGoGame.js
import { useState } from "react";

function useGoGame() {
  const [board, setBoard] = useState(
    Array(9)
      .fill()
      .map(() => Array(9).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState("black");

  const placeStone = (row, col) => {
    if (board[row][col] === null) {
      const newBoard = board.map((row) => [...row]);
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
    }
  };

  // Return the state and the function to use them
  return {
    board,
    currentPlayer,
    placeStone,
  };
}

export default useGoGame;
