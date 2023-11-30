import Validator from "../lib/Validator.js"

class Lap {
  #lap

  /**
   * 
   * @param {string} input 
   */
  constructor(input) {
    this.#validate(input)
    this.#lap = Number(input)
  }

  /**
   * 
   * @param {string} input 
   */
  #validate(input){
    Validator.checkLap(input)
  }

  /**
   * 
   * @returns {number}
   */
  returnLaps() {
    return this.#lap
  }
}

export default Lap;