import { ERROR_TEXT } from '../../src/constants/constants'
import Lap from '../../src/Model/Lap.js'

describe('Lap 클래스에 대한 테스트', () => {
  test.each([
    '',
    ,
  ])('입력 값이 없거나 빈 문자열을 입력했을 때 예외를 발생시킨다', input => {
    expect(() => new Lap(input).returnLaps()).toThrow(ERROR_TEXT.emptyInput)
  });

  test.each([
    'a',
    '1a',
    '-',
    ',',
    'ㅇ',
    '테',
    'F'
  ])('입력 값에 숫자가 아닌 문자가 입력되었을 때 에외를 발생시킨다.', input => {
    expect(() => new Lap(input).returnLaps()).toThrow(ERROR_TEXT.onlyNumber)
  });

  test('입력 값이 최대값보다 많이 입력되었을 때 예외를 발생시킨다', () => {
    const input = 100001

    expect(() => new Lap(input).returnLaps()).toThrow(ERROR_TEXT.overLapMax)
  })
})