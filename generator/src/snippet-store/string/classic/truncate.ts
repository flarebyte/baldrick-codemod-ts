/**
 * Truncates string if it's longer than the given maximum string length.
 */
export const truncate =
  (maxLength: number) =>
  (text: string): string =>
    text.length > maxLength ? text.slice(0, maxLength) : text;
