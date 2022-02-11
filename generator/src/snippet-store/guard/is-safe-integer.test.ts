import { isSafeInteger } from './is-safe-integer';

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
      NaN,
      Infinity,
      -Infinity
    ];
    const actual: number[] = values.filter(isSafeInteger);
    expect(actual).toStrictEqual([1, 1000, 0, -5]);
  });
});
