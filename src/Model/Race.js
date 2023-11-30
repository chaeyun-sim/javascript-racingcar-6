import Scoreboard from './Scoreboard.js';
import RollDice from './RollDice.js';
import OutputView from '../View/OutputView.js';

class Race {
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

    let isPlaying = laps;

    while (isPlaying > 0) {
      this.cars.forEach(car => {
        const score = new RollDice().moveForward();
        this.scoreboard.updateScore(car, score);
        this.#printRaceResult(car);
      });

      isPlaying--;
    }
  }

  /**
   * 
   * @param {string} car 
   */
  #printRaceResult(car) {
    const score = this.scoreboard.getScore(car);
    OutputView.print(`${car} : ${'-'.repeat(score)}`);
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
