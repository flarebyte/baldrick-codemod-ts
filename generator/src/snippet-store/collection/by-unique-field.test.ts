import { byUniqueSomeField } from './by-unique-field';

describe('by-unique-field', () => {
  it('should sort by field in ascending order', () => {
    const values = [
      { title: 'ghj', someField: 'ghj' },
      { title: 'abc', someField: 'abc' },
      { title: 'xyz', someField: 'xyz' },
      { title: 'abc 2', someField: 'abc' },
    ];
    const actual = values.filter(byUniqueSomeField);
    expect(actual).toMatchInlineSnapshot(`
      Array [
        Object {
          "someField": "ghj",
          "title": "ghj",
        },
        Object {
          "someField": "abc",
          "title": "abc",
        },
        Object {
          "someField": "xyz",
          "title": "xyz",
        },
      ]
    `);
  });
});
