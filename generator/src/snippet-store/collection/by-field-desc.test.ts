import { sortedBySomeFieldDesc } from './by-field-desc';

describe('by-field-desc', () => {
  it('should sort by field in ascending order', () => {
    const values = [
      { title: 'ghj', someField: 'ghj' },
      { title: 'abc', someField: 'abc' },
      { title: 'xyz', someField: 'xyz' },
    ];
    const actual = values.sort(sortedBySomeFieldDesc);
    expect(actual).toMatchInlineSnapshot(`
      Array [
        Object {
          "someField": "xyz",
          "title": "xyz",
        },
        Object {
          "someField": "ghj",
          "title": "ghj",
        },
        Object {
          "someField": "abc",
          "title": "abc",
        },
      ]
    `);
  });
});
