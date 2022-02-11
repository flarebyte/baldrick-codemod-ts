import { isNonBlankString } from './is-non-blank-string';

describe('is-non-blank-string', () => {
  it('should detect a non-blank string in a list', () => {
    const values = [1, '12', 'a', '', '  ', ' z', '\n', ' \n', true, null, undefined];
    const actual: string[] = values.filter(isNonBlankString);
    expect(actual).toStrictEqual(['12', 'a', ' z']);
  });
});
