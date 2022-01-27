import { camelCase } from './camel-case';

const simpleSplitter = (text: string): string[] => text.split(' ');

describe('camel-case', () => {
  const simpleCamelCase = camelCase(simpleSplitter);
  const cases: [string, string][] = [
    ['', ''],
    ['simple', 'simple'],
  ];
  it.each(cases)('should convert "%s" to "%s"', (given, expected) => {
    expect(simpleCamelCase(given)).toStrictEqual(expected);
  });
});
