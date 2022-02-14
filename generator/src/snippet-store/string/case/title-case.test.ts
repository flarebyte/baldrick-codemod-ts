import { titleCase } from './title-case';

const simpleSplitter = (text: string): string[] => text.split(' ');

describe('title-case', () => {
  const simpleTitleCase = titleCase(simpleSplitter);
  const cases: [string, string][] = [
    ['', ''],
    ['simple', 'Simple'],
    ['two words', 'TwoWords'],
  ];
  it.each(cases)('should convert "%s" to "%s"', (given, expected) => {
    expect(simpleTitleCase(given)).toStrictEqual(expected);
  });
});
