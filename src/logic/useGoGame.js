//// src/logic/useGoGame.js
import { useState } from "react";

function useGoGame() {
  // Store the game engine instance
  const gameStore = useRef(new GoGameEngine());

  // These states trigger UI updates
  const [board, setBoard] = useState(gameStore.current.getBoard());
  const [currentPlayer, setCurrentPlayer] = useState(
    gameStore.current.getCurrentPlayer()
  );
  const [capturedStones, setCapturedStones] = useState(
    gameStore.current.getCapturedStones()
  );

  // Place a stone on the board
  const placeStone = (row, col) => {
    const engine = gameStore.current;
    const didPlace = engine.placeStone(row, col);

    if (didPlace) {
      setBoard(engine.getBoard());
      setCurrentPlayer(engine.getCurrentPlayer());
      setCapturedStones(engine.getCapturedStones());
    }

    return didPlace;
  };

  // Reset the board and start over
  const resetGame = () => {
    const engine = gameStore.current;
    engine.resetGame();

    setBoard(engine.getBoard());
    setCurrentPlayer(engine.getCurrentPlayer());
    setCapturedStones(engine.getCapturedStones());
  };


  // Get current score
  const getScore = () => {
    return gameStore.current.calculateScore();
  };

  return {
    board,
    currentPlayer,
    capturedStones,
    placeStone,
    resetGame,
    undoMove,
    getScore,
  };
}

export default useGoGame;