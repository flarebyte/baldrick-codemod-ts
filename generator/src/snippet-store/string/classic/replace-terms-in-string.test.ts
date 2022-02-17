import { replaceTermsInString } from './replace-terms-in-string';

type SearchAndRepl = [string, string];

const examples: [SearchAndRepl[], string, string][] = [
  [
    [
      ['alpha', 'Paris'],
      ['bravo', 'New York'],
    ],
    'Dear bravo, and dear alpha',
    'Dear New York, and dear Paris',
  ],
  [
    [
      ['first', 'Premier'],
      ['firstMethod', 'draw()'],
      ['firstClass', 'Rectangle'],
    ],
    'In first class, your firstClass may have a firstMethod',
    'In Premier class, your Rectangle may have a draw()',
  ],
];
describe('replace-terms-in-string', () => {
  it.each(examples)(
    'should replace terms for %s',
    (terms, template, expected) => {
      const actual = replaceTermsInString(terms)(template);
      expect(actual).toStrictEqual(expected);
    }
  );
});
