import { uniqueStrings } from './unique-strings';

describe('unique-strings', () => {
  it('should create a list of ordered unique strings', () => {
    const actual = uniqueStrings(['ghj', 'abc', 'xyz', 'abc']);
    expect(actual).toStrictEqual(['abc', 'ghj', 'xyz']);
  });
  it('should ignore empty array', () => {
    const actual = uniqueStrings([]);
    expect(actual).toStrictEqual([]);
  });
  it('should ignore an array with single item', () => {
    const actual = uniqueStrings(['abc']);
    expect(actual).toStrictEqual(['abc']);
  });
});
