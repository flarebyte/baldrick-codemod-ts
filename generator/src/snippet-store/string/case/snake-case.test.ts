import { snakeCase } from './snake-case';

const simpleSplitter = (text: string): string[] => text.split(' ');

describe('snake-case', () => {
  const simpleSnakeCase = snakeCase(simpleSplitter);
  const cases: [string, string][] = [
    ['', ''],
    ['simple', 'simple'],
    ['two words', 'two_words'],
  ];
  it.each(cases)('should convert "%s" to "%s"', (given, expected) => {
    expect(simpleSnakeCase(given)).toStrictEqual(expected);
  });
});
