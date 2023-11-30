import Controller from "./Controller/Controller.js";

class App {
  async play() {
    this.controller = new Controller()
    await this.controller.getInput()
    this.controller.play()
  }
}

export default App;
