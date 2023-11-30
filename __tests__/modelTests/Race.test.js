import Race from '../../src/Model/Race.js'
import RollDice from '../../src/Model/RollDice.js';

const capturedMessages = [];

jest.spyOn(console, 'log').mockImplementation(message => {
  capturedMessages.push(message);
});

describe('Race 클래스에 대한 테스트', () => {
  test('주어진 lap 수만큼 레이스를 반복해야한다.', () => {
    const moveFoward = jest.fn().mockReturnValue(1);
    jest.spyOn(RollDice.prototype, 'moveForward').mockImplementation(moveFoward);

    const names = ['Car1', 'Car2', 'Car3'];
    const race = new Race(names);
    const laps = 3;

    race.runRace(laps);

    expect(moveFoward).toHaveBeenCalledTimes(names.length * laps);
  });

  test('레이스가 끝나면 스코어보드를 반환해야한다.', () => {
    const names = ['Car1', 'Car2', 'Car3'];
    const race = new Race(names);
    const expectedBoard = {
      Car1: 0,
      Car2: 0,
      Car3: 0,
    };

    const board = race.returnBoard();

    expect(board).toEqual(expectedBoard);
  })
})