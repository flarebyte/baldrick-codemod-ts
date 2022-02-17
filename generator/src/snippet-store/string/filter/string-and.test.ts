import { stringAnd } from './string-and';
import { byStringStartingWith } from './by-string-starting-with';
import { byStringEndingWith } from './by-string-ending-with';

describe('string-and', () => {
  const query = stringAnd([
    byStringStartingWith('alpha:'),
    byStringEndingWith('.json'),
  ]);

  it('should keep the string starting with alpha and ending with json', () => {
    const actual = [
      'nope',
      'alpha:3',
      'bravo:here',
      'alpha:content.json',
      'not alpha',
    ].filter(query);
    expect(actual).toStrictEqual(['alpha:content.json']);
  });
});
