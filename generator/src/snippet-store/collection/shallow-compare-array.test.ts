import { shallowCompareArray } from './shallow-compare-array';

type EasyType = string | number | object;

const objA = { a: 'alpha' };
const objB = { b: 'bravo' };

const similarValues: [EasyType[], EasyType[]][] = [
  [
    [1, 2],
    [1, 2],
  ],
  [
    ['a', 2],
    ['a', 2],
  ],
  [
    [objA, objB],
    [objA, objB],
  ],
];

describe('shallow-compare-array', () => {
  it('should reject array of different sizes', () => {
    const actual = shallowCompareArray([1, 2, 3], [1, 2]);
    expect(actual).toBeFalsy();
  });
  it('should detect empty array', () => {
    const actual = shallowCompareArray([], []);
    expect(actual).toBeTruthy();
  });
  it.each(similarValues)('should detect similar array %s', (a, b) => {
    const actual = shallowCompareArray(a, b);
    expect(actual).toBeTruthy();
  });
  it('should reject changing values', () => {
    const actual = shallowCompareArray([1, 2, 3], [1, 2, 4]);
    expect(actual).toBeFalsy();
  });
  it('should reject comparing similar objects but with different references', () => {
    const actual = shallowCompareArray(
      [{ a: 'a' }, { b: 'b' }],
      [{ a: 'a' }, { b: 'b' }]
    );
    expect(actual).toBeFalsy();
  });
});
