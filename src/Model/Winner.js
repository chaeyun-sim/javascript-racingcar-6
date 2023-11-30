import OutputView from '../View/OutputView.js'
import Race from './Race.js'

class Winner {
  findWinners(scoreboard) {
    const values = Object.values(scoreboard)
    const winners = Object.keys(scoreboard).filter(key => scoreboard[key] === Math.max(...values));
    
    this.#printWinners(winners)
  }

  #printWinners(winners) {
    OutputView.printWinners(winners)
  }
}

export default Winner;