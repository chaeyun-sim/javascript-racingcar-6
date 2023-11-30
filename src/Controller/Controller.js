import Cars from '../Model/Cars.js';
import InputView from '../View/InputView.js'

class Controller {
  #cars
  constructor() {
    this.#cars = [];
  }

  async play() {
    await this.requestCarNames();
  }
  
  async requestCarNames() {
    const cars = await InputView.inputCarNames();
    this.#cars = new Cars(cars).returnValue();
  }
}

export default Controller;