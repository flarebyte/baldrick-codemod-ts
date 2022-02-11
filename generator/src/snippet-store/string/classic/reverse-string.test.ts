import { reverseString } from './reverse-string';

describe('reverse-string', () => {
  it('should reverse a string', () => {
    const actual = reverseString('abc');
    expect(actual).toStrictEqual('cba');
  });
  it('should reverse an empty string', () => {
    const actual = reverseString('');
    expect(actual).toStrictEqual('');
  });
});
