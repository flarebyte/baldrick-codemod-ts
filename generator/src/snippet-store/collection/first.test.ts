import { first } from './first';

describe('first', () => {
  it('should return the first value if any', () => {
    const actual = first([1, 2, 3], 7);
    expect(actual).toStrictEqual(1);
  });
  it('should return the default value if empty', () => {
    const actual = first([], 7);
    expect(actual).toStrictEqual(7);
  });
});
