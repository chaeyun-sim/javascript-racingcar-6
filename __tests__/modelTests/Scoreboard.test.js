import Scoreboard from "../../src/Model/Scoreboard"

describe('Scoreboard 클래스 테스트', () => {
  let scoreboard;

  beforeEach(() => {
    scoreboard = new Scoreboard(['Player1', 'Player2', 'Player3']);
  });

  test('주어진 모든 플레이어에 대해 값이 0인 스코어보드가 만들어져야한다.', () => {
    const board = scoreboard.returnBoard();

    expect(board).toEqual({
      Player1: 0,
      Player2: 0,
      Player3: 0,
    });
  });

  test('같은 플레이어에 대해 여러 번 스코어를 업데이트할 수 있다.', () => {
    scoreboard.updateScore('Player1', 10);
    scoreboard.updateScore('Player1', 11);
    const score = scoreboard.getScore('Player1');
    const expectedScore = 21

    expect(score).toBe(expectedScore);
  });

  test('여러 플레이어에 대해 스코어를 업데이트할 수 있다.', () => {
    scoreboard.updateScore('Player1', 5);
    scoreboard.updateScore('Player2', 8);
    const score = [scoreboard.getScore('Player1'), scoreboard.getScore('Player2')]
    const expectedScore = [5, 8]

    score.forEach((score, i) => (
      expect(score).toEqual(expectedScore[i])
    ))
  })
})