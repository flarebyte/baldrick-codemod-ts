import { betweenString } from './between-string';

describe('between-string', () => {
  it('should capture a string between two markers', () => {
    const actual = betweenString('(', ')', '')('[](http://website.com)');
    expect(actual).toStrictEqual('http://website.com');
  });

  it('should only capture the first string', () => {
    const actual = betweenString(
      '(',
      ')',
      ''
    )('[](http://website.com)(http://website2.com) more after');
    expect(actual).toStrictEqual('http://website.com');
  });
  it('should not be confused with nested block', () => {
    const actual = betweenString(
      '(',
      ')',
      ''
    )('[]((http://website.com) more after');
    expect(actual).toStrictEqual('(http://website.com');
  });

  it('should not capture a string if only start marker', () => {
    const actual = betweenString('(', ')', '')('[](http://website.com');
    expect(actual).toStrictEqual('');
  });

  it('should not capture a string if only end marker', () => {
    const actual = betweenString('(', ')', '')('[]http://website.com)');
    expect(actual).toStrictEqual('');
  });
  it('should not fail if empty string', () => {
    const actual = betweenString('(', ')', '')('');
    expect(actual).toStrictEqual('');
  });
});
