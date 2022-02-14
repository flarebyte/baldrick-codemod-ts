import { isInRange } from './is-in-range';

describe('is-in-range', () => {
  it('should extract values in range', () => {
    const values = [
      1,
      '12',
      2,
      3,
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
      Number.NaN,
      Number.POSITIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
    ];
    const actual: number[] = values.filter(isInRange(1, 3));
    expect(actual).toStrictEqual([1, 2, 1.2]);
  });
});
