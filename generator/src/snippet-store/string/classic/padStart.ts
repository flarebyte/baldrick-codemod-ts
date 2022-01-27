const padStart =
  (maxLength: number, fillString?: string) =>
  (text: string): string =>
    text.padStart(maxLength, fillString);
