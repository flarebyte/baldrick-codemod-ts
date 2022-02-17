import { sortedBySomeField } from './by-field-asc';

describe('by-field-asc', () => {
  it('should sort by field in ascending order', () => {
    const values = [
      { title: 'xyz', someField: 'xyz' },
      { title: 'ghj', someField: 'ghj' },
      { title: 'abc', someField: 'abc' },
    ];
    const actual = values.sort(sortedBySomeField);
    expect(actual).toMatchInlineSnapshot(`
      Array [
        Object {
          "someField": "abc",
          "title": "abc",
        },
        Object {
          "someField": "ghj",
          "title": "ghj",
        },
        Object {
          "someField": "xyz",
          "title": "xyz",
        },
      ]
    `);
  });
});
