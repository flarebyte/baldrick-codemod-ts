export function shallowCompareArray<A>(actual: A[], expected: A[]): boolean {
  if (expected.length !== actual.length) return false;
  if (actual.length === 0) return true;
  for (const [index, expectedValue] of expected.entries()) {
    if (actual[index] !== expectedValue) {
      return false;
    }
  }
  return true;
}
