import { firstOrThrow } from './first-or-throw';

describe('first-or-throw', () => {
  it('should return the first value if any', () => {
    const actual = firstOrThrow([1, 2, 3]);
    expect(actual).toStrictEqual(1);
  });
  it('should throw if empty', () => {
    expect(() => firstOrThrow([])).toThrowErrorMatchingInlineSnapshot(
      `"The array should have at least one item"`
    );
  });
});
