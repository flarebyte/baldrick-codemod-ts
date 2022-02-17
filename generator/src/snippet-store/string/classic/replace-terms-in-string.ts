const byDecreasingSize = (
  a: [string, string],
  b: [string, string]
): -1 | 0 | 1 => {
  if (a[0].length > b[0].length) {
    return -1;
  }
  if (a[0].length < b[0].length) {
    return 1;
  }
  if (a[0] > b[0]) {
    return 1;
  }
  if (a[0] < b[0]) {
    return -1;
  }
  return 0;
};
/**
 * Replaces a list of search/replacement values
 * starting with the longest search terms first
 * Limits:
 * - no escaping and not safe for untrusted data.
 * - replacements are done one at a time,
 * while we may expect them to be done all at once
 */
export const replaceTermsInString =
  (terms: [string, string][]) =>
  (text: string): string => {
    const longestTermsFirst = [...terms].sort(byDecreasingSize);
    let content = text;
    for (const term of longestTermsFirst) {
      const [search, replacement] = term;
      content = content.split(search).join(replacement);
    }

    return content;
  };
