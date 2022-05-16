
const checkMethodAspect = (line: string) => {
  return (
    line.includes('->') &&
    line.includes(':')&&
    !line.includes('\\') &&
    !line.includes('::')
  );
}

const stripStringList = (list: string[]) => list.map( s => s.trim())

function replaceArrowWithinParenthesis(text: string) {
  var inParen, letter, r;
  r = '';
  inParen = false;

  for (
    var letter, _pj_c = 0, _pj_a = text, _pj_b = _pj_a.length;
    _pj_c < _pj_b;
    _pj_c += 1
  ) {
    letter = _pj_a[_pj_c];

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
  var noArrow, params;
  noArrow = replaceArrowWithinParenthesis(signature);
  params = stripStringList(noArrow.split('->'));
  return function () {
    var _pj_a = [],
      _pj_b = params;

    for (var _pj_c = 0, _pj_d = _pj_b.length; _pj_c < _pj_d; _pj_c += 1) {
      var a = _pj_b[_pj_c];

      _pj_a.push(a.replace('@', '->'));
    }

    return _pj_a;
  }.call(this);
}

function parseMethodSignature(lines: string[], line: string) {
  var methodName, paramNames, paramTypes, params, signParams, signature;
  [methodName, signature] = line.split(':', 2);
  signParams = parseParams(signature);
  paramTypes = signParams.slice(0, -1);
  paramNames = stripStringList(findParameterNames(methodName)(lines));
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

export const parseElm = (_content: string) => '';
