import { isArray } from './is-array';

describe('is-array', () => {
  it('should detect an empty array', () => {
    expect(isArray([])).toBeTruthy();
  });
  it('should detect s simple array', () => {
    expect(isArray([1, 'b'])).toBeTruthy();
  });
  it('should reject an object', () => {
    expect(isArray({})).toBeFalsy();
  });
});
