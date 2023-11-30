import Winner from "../../src/Model/Winner";

describe('Winner 클래스 테스트', () => {
  test('단독 우승일 때', () => {
    const scoreboard = {'Player1': 1, 'Player2': 2};
    const winners = new Winner().findWinners(scoreboard);
    const expectedWinners = ['Player2'];

    expect(winners).toEqual(expectedWinners);
  });

  test('공동 우승일 때', () => {
    const scoreboard = {'Player1': 1, 'Player2': 1};
    const winners = new Winner().findWinners(scoreboard);
    const expectedWinners = ['Player1', 'Player2']

    expect(winners).toEqual(expectedWinners)
  });

  test("우승자가 없을 때", () => {
    const scoreboard = { "Player1": 0, "Player2": 0, "Player3": 0 };
    const winner = new Winner();
    const winners = winner.findWinners(scoreboard);

    expect(winners).toEqual([]);
  });
})