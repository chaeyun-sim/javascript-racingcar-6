import { ERROR_TEXT, NAME_MAXIMUM, PATTERNS } from "../constants/constants.js";

const Validator = {
  /**
   * 
   * @param {string} input 
   */
  checkCarName(input) {
    if (!input) throw new Error(ERROR_TEXT.emptyInput)

    this.checkCarNamesArray(input.split(','))
    this.checkDuplicate(input.split(','))
  },

  /**
   * 
   * @param {string[]} array 
   */
  checkCarNamesArray(array){
    array.forEach(name => {
      if (name.length > NAME_MAXIMUM) {
        throw new Error(ERROR_TEXT.NAME_MAXIMUM)
      }

      if (!PATTERNS.onlyChar.test(name)) {
        throw new Error(ERROR_TEXT.onlyChar)
      }
    })
  },

  /**
   * 
   * @param {string[]} array 
   */
  checkDuplicate(array){
    const sorted = array.sort().join(',')
    const removeDuplicates = [...new Set(array)].sort().join(',')
    
    if (sorted !== removeDuplicates) {
      throw new Error(ERROR_TEXT.duplicated)
    }
  }
}

export default Validator;