import { truncate } from './truncate';

describe('truncate', () => {
  it('should not truncate short enough string', () => {
    const actual = truncate(3)('ab');
    expect(actual).toStrictEqual('ab');
  });
  it('should not truncate for exact length', () => {
    const actual = truncate(3)('abc');
    expect(actual).toStrictEqual('abc');
  });
  it('should not truncate empty string', () => {
    const actual = truncate(3)('');
    expect(actual).toStrictEqual('');
  });
  it('should  truncate longer string', () => {
    const actual = truncate(3)('abcd');
    expect(actual).toStrictEqual('abc');
  });
});
