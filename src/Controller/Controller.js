import Cars from '../Model/Cars.js';
import InputView from '../View/InputView.js'
import Lap from '../Model/Lap.js'

class Controller {
  #cars
  #laps
  constructor() {
    this.#cars = [];
    this.#laps = 0;
  }

  async play() {
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
}

export default Controller;