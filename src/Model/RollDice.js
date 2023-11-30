import { MissionUtils } from "@woowacourse/mission-utils";
import { GO_FORWARD } from "../constants/constants.js";

class RollDice {
  moveForward() {
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(0, 9)

    return RANDOM_NUMBER >= GO_FORWARD ? 1 : 0
  }
}

export default RollDice;