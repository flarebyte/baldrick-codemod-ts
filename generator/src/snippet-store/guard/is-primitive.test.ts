import { isString } from './is-primitive';

describe('is-string', () => {
  it('should detect a string in a list', () => {
    const values = [1, '12', 'a', true, null, undefined];
    const actual: string[] = values.filter(isString);
    expect(actual).toStrictEqual(['12', 'a']);
  });
});
