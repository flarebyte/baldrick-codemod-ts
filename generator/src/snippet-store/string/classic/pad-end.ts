/**
 * Partial application of maxLength and fillString so they can be used 
 * for the padding from the end (right) of the current string.
 * @param maxLength The length of the resulting string once the current string has been padded.
 * @param fillString The string to pad the current string with.
 * @returns a function that takes the text to pad
 */
export const padEnd =
  (maxLength: number, fillString?: string) =>
  (text: string): string =>
    text.padEnd(maxLength, fillString);
