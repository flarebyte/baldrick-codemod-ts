import { firstTrue } from './first-true';

describe('first-true', () => {
  it('should run the first function that is true', () => {
    const actual = firstTrue(
      [
        [false, () => 1],
        [true, () => 2],
        [true, () => 3],
      ],
      0
    );
    expect(actual).toStrictEqual(2);
  });
  it('should return the default value if everything is false', () => {
    const actual = firstTrue(
      [
        [false, () => 1],
        [false, () => 2],
      ],
      0
    );
    expect(actual).toStrictEqual(0);
  });
});
