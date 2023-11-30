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
  printWinners(winner) {
    const result = winner.length === 1 ? winner[0] : winner.join(', ')
    MissionUtils.Console.print(GUIDE_TEXT.printWinner + result)
  }
}

export default OutputView;