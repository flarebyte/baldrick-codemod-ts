import { isNullOrUndefined } from './is-null-or-undefined';

describe('is-null-or-undefined', () => {
  it('should match null', () => {
    expect(isNullOrUndefined(null)).toBeTruthy()
  });
  it('should match undefined', () => {
    expect(isNullOrUndefined(undefined)).toBeTruthy()
  });
  it('should not match an empty object', () => {
    expect(isNullOrUndefined({})).toBeFalsy()
  });
  it('should not match 0', () => {
    expect(isNullOrUndefined(0)).toBeFalsy()
  });
});
