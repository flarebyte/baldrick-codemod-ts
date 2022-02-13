import { snakeCase } from './snake-case';

const simpleSplitter = (text: string): string[] => text.split(' ');

describe('camel-case', () => {
  const simpleSnakeCase = snakeCase(simpleSplitter);
  const cases: [string, string][] = [
    ['', ''],
    ['simple', 'simple'],
  ];
  it.each(cases)('should convert "%s" to "%s"', (given, expected) => {
    expect(simpleSnakeCase(given)).toStrictEqual(expected);
  });
});
