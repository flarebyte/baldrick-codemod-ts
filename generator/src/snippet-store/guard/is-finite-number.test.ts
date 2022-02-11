import { isFiniteNumber } from './is-finite-number';

describe('is-finite-number', () => {
  it('should extract finite values', () => {
    const values = [
      1,
      '12',
      'a',
      1000,
      '',
      0,
      -5,
      1.2,
      -3.14,
      true,
      null,
      undefined,
      NaN,
      Infinity,
      -Infinity,
    ];
    const actual: number[] = values.filter(isFiniteNumber);
    expect(actual).toStrictEqual([1, 1000, 0, -5, 1.2, -3.14]);
  });
});
