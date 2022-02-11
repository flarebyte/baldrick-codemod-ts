import { isPositive } from './is-positive';

describe('is-positive', () => {
  it('should extract positive values', () => {
    const values = [1, '12', 'a', 1000, '', 0, -5, true, null, undefined];
    const actual: number[] = values.filter(isPositive);
    expect(actual).toStrictEqual([1, 1000]);
  });
});
