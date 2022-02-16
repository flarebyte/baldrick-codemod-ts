/**
 * Run the first function for which the test is positive. Think advanced ternary operator
 */
export function firstTrue<R>(tests: [boolean, () => R][], defaultValue: R): R {
  for (const current of tests) {
    const [isTriggered, currentFunction] = current;
    if (isTriggered) {
      return currentFunction();
    }
  }
  return defaultValue;
}
