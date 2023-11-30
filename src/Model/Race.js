import RollDice from "./RollDice.js";
import OutputView from '../View/OutputView.js'

class Race {
  #board

  constructor(names) {
    this.cars = names
    this.#board = {}
    this.#makeBoard()
  }
  
  #makeBoard() {
    this.cars.forEach(name => this.#board[name] = 0)
  }

  #printStart() {
    OutputView.printResult()
  }

  runRace(laps) {
    this.#printStart()

    let isPlaying = laps;

    while (isPlaying > 0) {
      this.cars.forEach(car => {
        this.#board[car] += new RollDice().moveForward();
        this.#printRaceResult(car)
      })
      
      isPlaying--
    }
  }
  
  #printRaceResult(car) {
    OutputView.print(`${car} : ${'-'.repeat(this.#board[car])}`)
  }
  
  returnBoard() {
    return this.#board
  }
}

export default Race;