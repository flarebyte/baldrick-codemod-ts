const stringUnionList = ['red', 'orange', 'yellow'] as const;

/**
 * Type for description
 */
export type StringUnion = typeof stringUnionList[number];
/**
 *  Guard for description
 */
export const isStringUnion = (value: unknown): value is StringUnion =>
  stringUnionList.includes(value as StringUnion);
