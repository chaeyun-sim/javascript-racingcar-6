import Scoreboard from './Scoreboard.js';
import RollDice from './RollDice.js';
import OutputView from '../View/OutputView.js';

class Race {
  /**
   * 
   * @param {string[]} names 
   */
  constructor(names) {
    this.cars = names;
    this.scoreboard = new Scoreboard(names);
  }

  #printStart() {
    OutputView.printResult();
  }

  /**
   * 
   * @param {number} laps 
   */
  runRace(laps) {
    this.#printStart();

    while (laps > 0) {
      this.cars.forEach((car, index) => {
        const score = new RollDice().moveForward();
        this.scoreboard.updateScore(car, score);
        this.#printRaceResult(car, index);
      });

      laps--;
    }
  }

  /**
   * 
   * @param {string} car 
   */
  #printRaceResult(car, index) {
    const score = this.scoreboard.getScore(car);
    if (index === this.cars.length - 1) {
      OutputView.print(`${car} : ${'-'.repeat(score)}`);
      OutputView.print('')
      return;
    }
    return OutputView.print(`${car} : ${'-'.repeat(score)}`);
  }

  /**
   * 
   * @returns {}
   */
  returnBoard() {
    return this.scoreboard.returnBoard();
  }
}

export default Race;
