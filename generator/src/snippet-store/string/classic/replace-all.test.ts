import { replaceAll } from './replace-all';

describe('replace-all', () => {
  it('should replace all the occurrences', () => {
    const actual = replaceAll('a.b.c.d', '.', ';');
    expect(actual).toStrictEqual('a;b;c;d');
  });
  it('should replace all leading and trailing occurrences', () => {
    const actual = replaceAll('.a.', '.', ';');
    expect(actual).toStrictEqual(';a;');
  });
  it('should keep an empty string', () => {
    const actual = replaceAll('', '.', ';');
    expect(actual).toStrictEqual('');
  });
  it('should keep a string without any occurrences', () => {
    const actual = replaceAll('abc', '.', ';');
    expect(actual).toStrictEqual('abc');
  });
});
