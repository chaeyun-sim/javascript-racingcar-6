import OutputView from '../View/OutputView.js'

class Winner {
  /**
   * 
   * @param {Object.<string, number>} scoreboard 
   */
  findWinners(scoreboard) {
    const values = Object.values(scoreboard)
    const winners = Object.keys(scoreboard).filter(key => scoreboard[key] === Math.max(...values));

    return winners
  }

  /**
   * 
   * @param {string[]} winners 
   */
  printWinners(winners) {
    const winnerString = winners.join(winners.length === 1 ? '' : ', ');

    OutputView.printWinners(winnerString)
  }
}

export default Winner;