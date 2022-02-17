import { slugify } from './slugify';

const simpleSplitter = (text: string): string[] => text.split(' ');

describe('slugify', () => {
  const simpleSlugify = slugify(simpleSplitter);
  const cases: [string, string][] = [
    ['', ''],
    ['simple', 'simple'],
    ['two words', 'two-words'],
    ['Two words', 'two-words'],
  ];
  it.each(cases)('should convert "%s" to "%s"', (given, expected) => {
    expect(simpleSlugify(given)).toStrictEqual(expected);
  });
});
