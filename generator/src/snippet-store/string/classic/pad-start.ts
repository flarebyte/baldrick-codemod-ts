/**
 * Partial application of maxLength and fillString so they can be used
 * for the padding from the start (left) of the current string.
 * @param maxLength The length of the resulting string once the current string has been padded.
 * @param fillString The string to pad the current string with.
 */
export const padStart =
  (maxLength: number, fillString?: string) =>
  (text: string): string =>
    text.padStart(maxLength, fillString);
