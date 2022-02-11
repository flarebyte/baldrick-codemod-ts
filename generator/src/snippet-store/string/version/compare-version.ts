const parseVersion = (version: string): [number, number, number] => {
  const parts = version.split('.').map((n) => parseInt(n, 10));
  if (parts.length !== 3) {
    throw new Error(`Version is expected to have 3 parts not ${parts.length}`);
  }
  const [major, minor, patch] = parts;
  if (major === undefined || minor === undefined || patch === undefined) {
    throw new Error('Major, minor and patch cannot be undefined');
  }
  if (isNaN(major) || isNaN(minor) || isNaN(patch)) {
    throw new Error('Major, minor and patch should be numbers');
  }
  return [major, minor, patch];
};

const compareNumber = (a: number, b: number): -1 | 0 | 1 => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

/**
 * Compare two versions (ex: 1.0.9)
 * Note: if we need more advanced support, we should consider a library
 * @param v1 the first version to compare
 * @param v2 the second version to compare
 * @returns 0 if same, 1 if v1 > 2, -1 if v1 < 2
 */
export const compareVersion = (v1: string, v2: string): -1 | 0 | 1 => {
  const [major1, minor1, patch1] = parseVersion(v1);
  const [major2, minor2, patch2] = parseVersion(v2);
  const diffMajor = compareNumber(major1, major2);
  const diffMinor = compareNumber(minor1, minor2);
  const diffPatch = compareNumber(patch1, patch2);

  if (diffMajor !== 0) {
    return diffMajor;
  }
  if (diffMinor !== 0) {
    return diffMinor;
  }
  if (diffPatch !== 0) {
    return diffPatch;
  }
  return 0;
};
