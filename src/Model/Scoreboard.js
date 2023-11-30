class Scoreboard {
  #board

  constructor(names) {
    this.#board = {};
    this.#makeBoard(names)
  }

  #makeBoard(names) {
    names.forEach(name => this.#board[name] = 0)
  }

  updateScore(name, score) {
    this.#board[name] += score;
  }

  getScore(name) {
    return this.#board[name];
  }

  getBoard() {
    return this.#board;
  }
}

export default Scoreboard;
