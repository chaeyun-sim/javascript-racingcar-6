import Cars from '../../src/Model/Cars.js'
import { ERROR_TEXT } from "../../src/constants/constants";

describe('Cars 클래스에 대한 테스트', () => {
  test.each([
    '',
    ,
  ])('빈 문자열이 입력되었을 때 예외를 발생시킨다.', input => {
    expect(() => new Cars(input).returnCars()).toThrow(ERROR_TEXT.emptyInput)
  });

  test('입력된 값이 쉼표(",")로 구분되나 빈 칸일 때 예외를 발생시킨다.', () => {
    const input = ',,,,'
    expect(() => new Cars(input).returnCars()).toThrow(ERROR_TEXT.emptyInput)
  })

  test.each([
    'john,daaaaaaaavid',
    'maximm'
  ])('입력된 값이 5자보다 많다면 예외를 발생시킨다.', input => {
    expect(() => new Cars(input).returnCars()).toThrow(ERROR_TEXT.overNameMax)
  });

  test.each([
    'john,jun!',
    '1,2,3_',
  ])('입력된 값이 한글, 영문, 숫자 외의 문자가 입력되었다면 예외를 발생시킨다', input=> {
    expect(() => new Cars(input).returnCars()).toThrow(ERROR_TEXT.onlyChar)
  })

  test.each([
    'test,test,test',
  ])('중복된 이름이 있다면 예외를 발생시킨다.', input => {
    expect(() => new Cars(input).returnCars()).toThrow(ERROR_TEXT.duplicated)
  })
})