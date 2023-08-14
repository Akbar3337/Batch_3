// 2. Create a calculator to perform  sum, subraction, multiplication and division of 2 integers provided by user

function Calculator(operator, a, b) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return 'Invalid operator';
  }
}

console.log(Calculator('+',8,9));