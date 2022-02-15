import { range } from './range';

describe('range', () => {
  it('should provide a range', () => {
    expect(range(5)).toStrictEqual([0, 1, 2, 3, 4]);
  });
});
