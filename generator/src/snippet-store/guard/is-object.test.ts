import { isObject } from './is-object';
/* eslint-disable unicorn/no-null*/

describe('is-object', () => {
  it('should detect empty object', () => {
    expect(isObject({})).toBeTruthy();
  });
  it('should reject null', () => {
    expect(isObject(null)).toBeFalsy();
  });
  it('should reject undefined', () => {
    expect(isObject(undefined)).toBeFalsy(); // eslint-disable-line unicorn/no-useless-undefined
  });
  it('should reject empty array', () => {
    expect(isObject([])).toBeFalsy();
  });
  it('should reject any array', () => {
    expect(isObject([1, 2])).toBeFalsy();
  });
});
