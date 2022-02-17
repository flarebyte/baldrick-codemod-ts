import { bySomeField } from './by-field';

const startWithYes = (value: string): boolean => value.startsWith('yes');

describe('by-field', () => {
  const fieldWithYes = bySomeField(startWithYes);
  it('should provide', () => {
    const values = [
      { someField: 'no' },
      { someField: 'yes-sir' },
      { someField: 'yes-madam', otherField: 'other field' },
    ];
    const actual = values.filter(fieldWithYes);
    expect(actual).toEqual([
      { someField: 'yes-sir' },
      { someField: 'yes-madam', otherField: 'other field' },
    ]);
  });
});
