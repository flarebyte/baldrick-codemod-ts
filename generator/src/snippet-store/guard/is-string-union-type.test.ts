import { isStringUnion } from './is-string-union-type';

describe('is-string-union-type', () => {
  it('should match a type', () => {
    const colors = ['blue', 'green', 'hot', 'red', 'orange'];
    const actual = colors.filter(isStringUnion);
    expect(actual).toStrictEqual(['red', 'orange']);
  });
});
