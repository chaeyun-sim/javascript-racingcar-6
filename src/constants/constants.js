const NAME_MAXIMUM = 5;
const LAP_MAXIMUM = 100000;
const GO_FORWARD = 4;
const STOP = 3;


const GUIDE_TEXT = Object.freeze({
  insertCarNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  insertLaps: '시도할 횟수는 몇 회인가요?\n',
  printResult: '실행 결과',
  printWinner: '최종 우승자 : '
});

const ERROR_TEXT = Object.freeze({
  emptyInput: '[ERROR] 잘못된 입력입니다. 빈 문자열은 입력할 수 없습니다.',
  correctSeperation: '[ERROR] 잘못된 형식입니다. 여러 대의 이름은 쉼표(,)로 구분하여 입력해야합니다.',
  duplicated: '[ERROR] 중복된 이름이 존재합니다.',
  overNameMax : `[ERROR] 잘못된 형식입니다. 자동차 이름은 ${NAME_MAXIMUM}자 이하여야 합니다.`,
  overLapMax: `[ERROR] 잘못된 형식입니다. 게임 실행 횟수는 ${LAP_MAXIMUM}회 이하여야 합니다.`,
  onlyChar: '[ERROR] 잘못된 형식입니다. 특수문자는 입력할 수 없습니다.',
  onlyNumber: '[ERROR] 잘못된 형식입니다. 숫자 외의 문자는 입력할 수 없습니다.'
});

const PATTERNS = Object.freeze({
	number: /^[0-9]+$/,
	onlyChar: /^[a-zA-Z0-9가-힣]+$/,
});

export {NAME_MAXIMUM, LAP_MAXIMUM, GO_FORWARD, STOP, GUIDE_TEXT, ERROR_TEXT, PATTERNS};