import OutputView from '../View/OutputView.js'

class Winner {
  /**
   * 
   * @param {Object.<string, number>} scoreboard 
   */
  findWinners(scoreboard) {
    const max = Math.max(...Object.values(scoreboard))

    if (max === 0) {
      return []
    }

    const winners = Object.keys(scoreboard).filter(key => scoreboard[key] === max);

    return winners
  }

  /**
   * 
   * @param {string[]} winners 
   */
  printWinners(winners) {
    if (!winners) {
      OutputView.printNoWinners()
    }

    const winnerString = winners.join(winners.length === 1 ? '' : ', ');
    OutputView.printWinners(winnerString)
  }
}

export default Winner;