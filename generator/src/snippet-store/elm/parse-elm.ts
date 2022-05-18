interface FunctionInfo {
  name: string;
  params: [string, string][];
  returned: string;
}

const trimStrings = (list: string[]) => list.map((s) => s.trim());
const chompLast = (text: string): string => text.trim().slice(0, -1).trim();

const replaceArrowWithinParenthesis = (text: string) => {
  let r = '';
  let inParen = false;
  const chars = text.split('');
  for (let letter of chars) {
    if (letter === '(') {
      inParen = true;
    }

    if (letter === ')') {
      inParen = false;
    }

    if (inParen && letter === '-') {
      letter = '';
    }

    if (inParen && letter === '>') {
      letter = '@';
    }

    r += letter;
  }

  return r;
};

const parseParams = (signature: string) => {
  const noArrow = replaceArrowWithinParenthesis(signature);
  const params = trimStrings(noArrow.split('->'));
  return params.map((param) => param.replace('@', '->'));
};

const findElmFunctionBlocks = (content: string): [string, string][] => {
  const lines = content.split('\n');
  let firstLine: string | false = false;
  let name: string | false = false;
  const results: [string, string][] = [];
  for (const line of lines) {
    if (line.includes(':') && line.includes('->')) {
      const maybeName = line.split(':')[0]?.trim() || false;
      name = maybeName && /(\w)+/.test(maybeName) ? maybeName : false;
      if (name) {
        firstLine = line;
      }
    } else if (
      name &&
      firstLine &&
      line.trim().endsWith('=') &&
      line.trim().startsWith(name)
    ) {
      results.push([firstLine, line]);
      name = false;
      firstLine = false;
    } else {
      name = false;
      firstLine = false;
    }
  }
  return results;
};

export const parseElmFunction = (
  twoLines: [string, string]
): FunctionInfo | false => {
  const [signatureLine, parametersLine] = twoLines;
  const hasEqual = parametersLine.trim().endsWith('=');
  const hasColon = signatureLine.includes(':');
  if (!hasEqual || !hasColon) {
    return false;
  }
  const [name, ...parameters] = trimStrings(
    chompLast(parametersLine).split(' ')
  );
  const [signatureName, signature] = trimStrings(signatureLine.split(':', 2));
  if (!name || name !== signatureName || !signature || !parameters) {
    return false;
  }
  const signatureParamsAndReturn = parseParams(signature);
  const returned = signatureParamsAndReturn.slice(-1)[0];
  const signatureParams = signatureParamsAndReturn.slice(0, -1);
  if (signatureParams.length !== parameters.length || !returned) {
    return false;
  }
  const params: [string, string][] = parameters.map((param, idx) => [
    param,
    signatureParams[idx] || '',
  ]);
  return {
    name,
    params,
    returned,
  };
};

const isFunctionInfo = (value: unknown): value is FunctionInfo =>
  typeof value === 'object' && value !== null;

export const parseElmFunctions = (content: string): FunctionInfo[] =>
  findElmFunctionBlocks(content).map(parseElmFunction).filter(isFunctionInfo);
