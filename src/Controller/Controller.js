import Cars from '../Model/Cars.js';
import InputView from '../View/InputView.js'
import Lap from '../Model/Lap.js'
import Race from '../Model/Race.js';

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
    this.#cars = new Cars(cars).returnValue();
  }

  async requestLaps() {
    const laps = await InputView.inputLaps()
    this.#laps = new Lap(laps).returnValue()
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
}

export default Controller;