import { compareVersion } from './compare-version';

const examples: [string, string, number][] = [
  ['1.0.0', '0.9.0', 1],
  ['1.1.0', '1.0.0', 1],
  ['1.19.0', '1.2.0', 1],
  ['1.2.0', '1.2.0', 0],
];

describe('compare-version', () => {
  it.each(examples)(
    'should compare version for %s and %s',
    (v1, v2, expected) => {
      const actual = compareVersion(v1, v2);
      const revActual = compareVersion(v2, v1);
      expect(actual).toStrictEqual(expected);
      if (expected !== 0) {
        expect(revActual).toStrictEqual(-1 * expected);
      }
    }
  );
  it('should fail if incorrect version format', () => {
    expect(() =>
      compareVersion('1.0.1.4.5', '1.2.3')
    ).toThrowErrorMatchingInlineSnapshot(
      `"Version is expected to have 3 parts not 5"`
    );
  });
  it('should fail if the version contains non-numeric chars', () => {
    expect(() =>
      compareVersion('1.a.3', '1.2.3')
    ).toThrowErrorMatchingInlineSnapshot(
      `"Major, minor and patch should be numbers"`
    );
  });
});
