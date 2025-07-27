class gameEngine {
  constructor() {
    this.board = this.createEmptyBoard();
    this.currentPlayer = "black";
    this.capturedStones = { black: 0, white: 0 };
    this.gameHistory = [];
  }

  // Creates a 9x9 board filled with empty spots
  createEmptyBoard() {
    const board = [];
    for (let row = 0; row < 9; row++) {
      const rowArray = [];
      for (let col = 0; col < 9; col++) {
        rowArray.push(null);
      }
      board.push(rowArray);
    }
    return board;
  }

  // Check if a cell is on the board
  isValidPosition(row, col) {
    return row >= 0 && row < 9 && col >= 0 && col < 9;
  }

  // Checks if a spot is empty
  isEmpty(row, col) {
    return this.isValidPosition(row, col) && this.board[row][col] === null;
  }

  // Get up/down/left/right neighbors
  getNeighbors(row, col) {
    const directions = [
      [-1, 0],
      [1, 0], // up/down
      [0, -1],
      [0, 1], // left/right
    ];

    const neighbors = [];
    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;
      if (this.isValidPosition(newRow, newCol)) {
        neighbors.push([newRow, newCol]);
      }
    }
    return neighbors;
  }

  // Get all stones connected (same color group)
  getGrouped(row, col) {
    const color = this.board[row][col];
    if (!color) return [];

    const group = [];
    const visited = new Set();
    const toVisit = [[row, col]];

    while (toVisit.length > 0) {
      const [r, c] = toVisit.pop();
      const key = `${r},${c}`;

      if (visited.has(key)) continue;
      visited.add(key);

      if (this.board[r][c] === color) {
        group.push([r, c]);

        const neighbors = this.getNeighbors(r, c);
        for (const [nr, nc] of neighbors) {
          const neighborKey = `${nr},${nc}`;
          if (!visited.has(neighborKey)) {
            toVisit.push([nr, nc]);
          }
        }
      }
    }

    return group;
  }

  // Checks if group has any empty neighbor spots
  hasFreedom(group) {
    for (const [r, c] of group) {
      const neighbors = this.getNeighbors(r, c);
      for (const [nr, nc] of neighbors) {
        if (this.isEmpty(nr, nc)) {
          return true;
        }
      }
    }
    return false;
  }

  // Removes captured stones from the board
  removeStones(group, color) {
    for (const [r, c] of group) {
      this.board[r][c] = null;
    }
    this.capturedStones[color] += group.length;
  }

  // After placing a stone, check if nearby enemy stones should be captured
  checkCaptured(row, col) {
    const player = this.board[row][col];
    const enemy = player === "black" ? "white" : "black";

    const neighbors = this.getNeighbors(row, col);

    for (const [nr, nc] of neighbors) {
      if (this.board[nr][nc] === enemy) {
        const enemyGroup = this.getGrouped(nr, nc);
        if (!this.hasFreedom(enemyGroup)) {
          this.removeStones(enemyGroup, enemy);
        }
      }
    }
  }

  // Try to place a stone for the current player
  placeStone(row, col) {
    if (!this.isEmpty(row, col)) return false;

    this.saveGame(); // Save before placing

    this.board[row][col] = this.currentPlayer;

    this.checkCaptured(row, col);

    const group = this.getGrouped(row, col);
    if (!this.hasFreedom(group)) {
      // Suicide move not allowed
      this.undoGame();
      return false;
    }

    this.changePlayer(); // Next player's turn
    return true;
  }

  // Switch between black and white
  changePlayer() {
    this.currentPlayer = this.currentPlayer === "black" ? "white" : "black";
  }

  // Save board state for undo
  saveGame() {
    this.gameHistory.push({
      board: this.board.map((row) => [...row]),
      currentPlayer: this.currentPlayer,
      capturedStones: { ...this.capturedStones },
    });

    // Limit history size
    if (this.gameHistory.length > 10) {
      this.gameHistory.shift();
    }
  }

  // Undo the last move
  undoGame() {
    const last = this.gameHistory.pop();
    if (!last) return false;

    this.board = last.board;
    this.currentPlayer = last.currentPlayer;
    this.capturedStones = last.capturedStones;
    return true;
  }

  // Get a copy of the board
  getBoard() {
    return this.board.map((row) => [...row]);
  }

  // Get current player's turn
  getCurrentPlayer() {
    return this.currentPlayer;
  }

  // Get how many stones each player has captured
  getCapturedStones() {
    return { ...this.capturedStones };
  }

  // Very basic scoring: count stones and captured
  calculateScore() {
    let black = 0;
    let white = 0;

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (this.board[row][col] === "black") black++;
        else if (this.board[row][col] === "white") white++;
      }
    }

    black += this.capturedStones.white;
    white += this.capturedStones.black;

    return { black, white };
  }
}

export default gameEngine;

