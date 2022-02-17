import { isNonEmptyString } from './is-non-empty-string';
/* eslint-disable unicorn/no-null*/

describe('is-non-empty-string', () => {
  it('should detect a non-empty string in a list', () => {
    const values = [1, '12', 'a', '', true, null, undefined];
    const actual: string[] = values.filter(isNonEmptyString);
    expect(actual).toStrictEqual(['12', 'a']);
  });
});
