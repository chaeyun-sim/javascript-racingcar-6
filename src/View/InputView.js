const { MissionUtils } = require("@woowacourse/mission-utils")
import {GUIDE_TEXT } from '../constants/constants.js'

const InputView = {
  inputCarNames(){
    const input = MissionUtils.Console.readLineAsync(GUIDE_TEXT.insertCarNames)
    return input
  },

  inputLaps() {
    const input = MissionUtils.Console.readLineAsync(GUIDE_TEXT.insertLaps)
    return input
  },
}

export default InputView;