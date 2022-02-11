/**
 * Replace all the search values by a replacement
 * @param text the text on which to apply the replacements
 * @param search the search value
 * @param replaceValue the replacement value
 * @returns the text with the replacements
 */
export const replaceAll = (
  text: string,
  search: string,
  replaceValue: string
): string => text.split(search).join(replaceValue);
