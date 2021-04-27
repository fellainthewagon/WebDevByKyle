const input = document.querySelector(".math-input"),
  form = document.querySelector(".input-items"),
  output = document.querySelector(".math-output");

const PARENTHESIS_REGEX = /\((?<equation>[^\(\)]*)\)/;
const MULT_DIV_REGEX = /(?<operand1>\S+)\s*(?<operation>[\/\*])\s*(?<operand2>\S+)/;
const EXP_REGEX = /(?<operand1>\S+)\s*(?<operation>\^)\s*(?<operand2>\S+)/;
const ADD_SUBS_REGEX = /(?<operand1>\S+)\s*(?<operation>(?<!e)[\-\+])\s*(?<operand2>\S+)/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const result = parse(input.value);
  output.textContent = result;
});

function parse(equation) {
  console.log(equation);
  if (equation.match(PARENTHESIS_REGEX)) {
    const subEquation = equation.match(PARENTHESIS_REGEX).groups.equation;
    const result = parse(subEquation);
    const newEquation = equation.replace(PARENTHESIS_REGEX, result);
    return parse(newEquation);
  } else if (equation.match(EXP_REGEX)) {
    const result = handleMath(equation.match(EXP_REGEX).groups);
    const newEquation = equation.replace(EXP_REGEX, result);
    return parse(newEquation);
  } else if (equation.match(MULT_DIV_REGEX)) {
    const result = handleMath(equation.match(MULT_DIV_REGEX).groups);
    const newEquation = equation.replace(MULT_DIV_REGEX, result);
    return parse(newEquation);
  } else if (equation.match(ADD_SUBS_REGEX)) {
    const result = handleMath(equation.match(ADD_SUBS_REGEX).groups);
    const newEquation = equation.replace(ADD_SUBS_REGEX, result);
    return parse(newEquation);
  } else {
    return parseFloat(equation);
  }
}

function handleMath({ operand1, operand2, operation }) {
  const math = {
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "^": (a, b) => a ** b,
  };
  const res = math[operation];
  return res(parseFloat(operand1), parseFloat(operand2));
}
