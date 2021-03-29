const solution = require('./multiplesOf3Or5.js');

describe('Multiples of 3 or 5', () => {
  let result = 0

  test('Input of 10 should give result of 23', () => {
    result = 3 + 5 + 6 + 9;

    expect(solution(10)).toBe(result);
  });

  test('Input of 20 should give result of 78', () => {
    result = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18;

    expect(solution(20)).toBe(result);
  })

  test('Negative input should return a 0', () => {
    expect(solution(-1)).toBe(0);
  })
});