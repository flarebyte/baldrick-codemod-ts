import { titleCase } from './title-case';

const simpleSplitter = (text: string): string[] => text.split(' ');

describe('camel-case', () => {
  const simpleTitleCase = titleCase(simpleSplitter);
  const cases: [string, string][] = [
    ['', ''],
    ['simple', 'simple'],
  ];
  it.each(cases)('should convert "%s" to "%s"', (given, expected) => {
    expect(simpleTitleCase(given)).toStrictEqual(expected);
  });
});
