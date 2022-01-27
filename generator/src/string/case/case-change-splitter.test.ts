import { splitOnCaseChange } from './case-change-splitter';

describe('case-change-splitter', () => {
  const cases: [string, string[]][] = [
    ['', ['']],
    ['simple', ['simple']],
  ];
  it.each(cases)('should convert "%s" to "%s"', (given, expected) => {
    expect(splitOnCaseChange(given)).toStrictEqual(expected);
  });
});
