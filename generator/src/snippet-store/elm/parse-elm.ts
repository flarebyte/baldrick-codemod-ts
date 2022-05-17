interface FunctionInfo {
  name: string;
  params: [string, string][];
  returned: string;
}
const checkMethodAspect = (line: string) => {
  return (
    line.includes('->') &&
    line.includes(':') &&
    !line.includes('\\') &&
    !line.includes('::')
  );
};

const trimStrings = (list: string[]) => list.map((s) => s.trim());

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
}

function parseParams(signature: string) {
  const noArrow = replaceArrowWithinParenthesis(signature);
  const params = trimStrings(noArrow.split('->'));
  return params.map( param => param.replace('@', '->'))
}

function parseMethodSignature(lines: string[], line: string): FunctionInfo {
  const [methodName, signature] = line.split(':', 2);
  const signParams = signature ? parseParams(signature): [];
  const paramTypes = signParams.slice(0, -1);
  const paramNames = trimStrings(findParameterNames(methodName)(lines));
  params = zip(paramNames, paramTypes);
  return {
    name: methodName?.trim(),
    params: params,
    returned: signParams.slice(-1)[0].strip(),
  };
}

const matchMethodName = (methodName: string) => (line: string) =>
  line.startsWith(methodName) && line.endsWith('=');

function extractParamName(line: string, methodName: string) {
  return line.replace(methodName, '').replace('=', '').trim().split('');
}

const findParameterNames = (methodName: string) => (lines: string[]) => {
  const found = lines.find(matchMethodName(methodName));
  return found ? extractParamName(found, methodName) : [];
};

export const parseElmFunctions = (_content: string): FunctionInfo[] => [];
