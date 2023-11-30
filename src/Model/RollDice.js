import { MissionUtils } from "@woowacourse/mission-utils";
import { GO_FORWARD } from "../constants/constants.js";

class RollDice {
  /**
   * 
   * @returns {number}
   */
  moveForward() {
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(0, 9)
    return +(RANDOM_NUMBER >= GO_FORWARD);
  }
}

export default RollDice;