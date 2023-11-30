import { MissionUtils } from "@woowacourse/mission-utils";
import {GUIDE_TEXT } from '../constants/constants.js'

const OutputView = {
  print(text) {
    MissionUtils.Console.print(text)
  },

  printResult(){
    MissionUtils.Console.print(GUIDE_TEXT.printResult)
  },

  /**
   * 
   * @param {string[]} winner 
   */
  printWinner(winner) {
    MissionUtils.Console.print(GUIDE_TEXT.printWinner + winner.join(', '))
  }
}

export default OutputView;