import { isSafeInteger } from './is-safe-integer';
/* eslint-disable unicorn/no-null*/

describe('is-positive', () => {
  it('should extract integer values', () => {
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
      Number.NaN,
      Number.POSITIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
    ];
    const actual: number[] = values.filter(isSafeInteger);
    expect(actual).toStrictEqual([1, 1000, 0, -5]);
  });
});
