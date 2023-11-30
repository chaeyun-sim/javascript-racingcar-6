class Scoreboard {
  #board

  constructor(names) {
    this.#board = {};
    this.#makeBoard(names)
  }

  /**
   * 
   * @param {string[]} names 
   */
  #makeBoard(names) {
    names.forEach(name => this.#board[name] = 0)
  }

  /**
   * 
   * @param {string} name 
   * @param {number} score 
   */
  updateScore(name, score) {
    this.#board[name] += score;
  }

  /**
   * 
   * @param {name} name 
   * @returns {number}
   */
  getScore(name) {
    return this.#board[name];
  }

  /**
   * 
   * @returns {}
   */
  returnBoard() {
    return this.#board;
  }
}

export default Scoreboard;
