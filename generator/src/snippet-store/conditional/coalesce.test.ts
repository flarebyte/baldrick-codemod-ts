import { coalesce } from './coalesce';
/* eslint-disable unicorn/no-useless-undefined*/

const undefinedFn = () => undefined;
const valFn = (value: number) => value + 3;
const valFn2 = (value: number) => value + 10;

describe('coalesce', () => {
  it('should pick the first defined value', () => {
    const functions = [undefinedFn, valFn, valFn2];
    const actual = coalesce(functions, 3);
    expect(actual).toStrictEqual(6);
  });
  it('should return undefined if no function succeed', () => {
    const functions = [undefinedFn];
    const actual = coalesce(functions, 3);
    expect(actual).toBeUndefined();
  });
});
