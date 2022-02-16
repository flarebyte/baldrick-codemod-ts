import { highestRank } from './highest-rank';

describe('highest-rank', () => {
  it('should run the function with the highest rank', () => {
    const actual = highestRank([
      [4, () => 1],
      [7, () => 2],
      [3, () => 3],
    ]);
    expect(actual).toStrictEqual(2);
  });
});
