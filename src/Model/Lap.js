import Validator from "../lib/Validator.js"

class Lap {
  #lap

  constructor(input) {
    this.#validate(input)
    this.#lap = Number(input)
  }

  #validate(input){
    Validator.checkLap(input)
  }

  returnValue() {
    return this.#lap
  }
}

export default Lap;