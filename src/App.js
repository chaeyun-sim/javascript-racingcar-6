import Controller from "./Controller/Controller.js";

class App {
  async play() {
    await new Controller().play()
  }
}

export default App;
