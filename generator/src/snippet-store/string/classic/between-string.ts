export const betweenString =
  (start: string, end: string, defaultValue: string) =>
  (text: string): string => {
    const startIdx = text.indexOf(start);
    const endIdx = text.indexOf(end);
    if (startIdx < 0 || endIdx < 0 || startIdx >= endIdx) {
      return defaultValue;
    }
    return text.slice(startIdx + 1, endIdx);
  };
