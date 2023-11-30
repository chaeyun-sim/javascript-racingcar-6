import Cars from '../Model/Cars.js';
import InputView from '../View/InputView.js'
import Lap from '../Model/Lap.js'
import Race from '../Model/Race.js';
import Winner from '../Model/Winner.js';

class Controller {
  #cars
  #laps
  constructor() {
    this.#cars = [];
    this.#laps = 0;
  }

  async getInput() {
    await this.requestCarNames();
    await this.requestLaps();
  }
  
  async requestCarNames() {
    const cars = await InputView.inputCarNames();
    this.#cars = new Cars(cars).returnCars();
  }

  async requestLaps() {
    const laps = await InputView.inputLaps()
    this.#laps = new Lap(laps).returnLaps()
  }

  async play() {
    this.requestPlayGame();
  }

  requestPlayGame() {
    this.race = new Race(this.#cars, this.#laps)
    this.race.runRace(this.#laps);
    const board = this.race.returnBoard();
    this.requestWinner(board)
  }

  requestWinner(board) {
    this.winner = new Winner()
    const winners = this.winner.findWinners(board)
    if (!winners.length) {
      return this.winner.printNoWinners()
    }
    this.winner.printWinners(winners)
  }
}

export default Controller;