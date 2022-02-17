/**
 * Reverse the order of the characters in the string
 * ```ts
 *  reverseString('abc')
 *  // return cba
 * ```
 * @param text the string to reverse
 * @returns the characters in reverse
 */
export const reverseString = (text: string): string =>
  [...text].reverse().join('');
