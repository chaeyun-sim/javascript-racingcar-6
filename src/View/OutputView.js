import { MissionUtils } from "@woowacourse/mission-utils";
import {GUIDE_TEXT } from '../constants/constants.js'

const OutputView = {
  /**
   * 
   * @param {string} text 
   */
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
    MissionUtils.Console.print(GUIDE_TEXT.printWinner + winner)
  },

  printNoWinners() {
    MissionUtils.Console.print(GUIDE_TEXT.printWinner + '없습니다.')
  }
}

export default OutputView;