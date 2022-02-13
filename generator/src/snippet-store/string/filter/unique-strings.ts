export const uniqueStrings = (values: string[]): string[] =>
  [...new Set(values)].sort();
