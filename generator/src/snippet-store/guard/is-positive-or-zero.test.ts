import { isPositiveOrZero } from './is-positive-or-zero';

describe('is-positive-or-zero', () => {
  it('should extract positive or zero values', () => {
    const values = [1, '12', 'a', 1000, '', 0, -5, true, null, undefined];
    const actual: number[] = values.filter(isPositiveOrZero);
    expect(actual).toStrictEqual([1, 1000, 0]);
  });
});
