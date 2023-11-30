import Validator from "../lib/Validator.js"

class Cars {
  #cars

  /**
   * 
   * @param {string} input 
   */
  constructor(input){
    this.#validate(input)
    this.#cars = input.split(',')
  }

  /**
   * 
   * @param {string} input 
   */
  #validate(input){
    Validator.checkCarName(input)
  }

  /**
   * 
   * @returns string[]
   */
  returnValue(){
    return this.#cars;
  }
}

export default Cars;
