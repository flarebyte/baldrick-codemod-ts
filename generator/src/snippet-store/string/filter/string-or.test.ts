import { stringOr } from './string-or';
import { byStringStartingWith } from './by-string-starting-with';

describe('string-or', () => {
  const query = stringOr([
    byStringStartingWith('alpha:'),
    byStringStartingWith('bravo:'),
  ]);

  it('should match all the string starting by a specific prefix', () => {
    const actual = ['nope', 'alpha:3', 'bravo:here', 'not alpha'].filter(query);
    expect(actual).toStrictEqual(['alpha:3', 'bravo:here']);
  });
});
