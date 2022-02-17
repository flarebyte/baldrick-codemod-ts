import { lowestRank } from './lowest-rank';

describe('lowest-rank', () => {
  it('should run the function with the lowest rank', () => {
    const actual = lowestRank([
      [4, () => 1],
      [7, () => 2],
      [3, () => 3],
    ]);
    expect(actual).toStrictEqual(3);
  });
});
