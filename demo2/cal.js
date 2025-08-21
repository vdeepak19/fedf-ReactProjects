function calculate(op) {
  let n1 = Number(document.getElementById('num1').value);
  let n2 = Number(document.getElementById('num2').value);
  let res;

  if (isNaN(n1) || isNaN(n2)) {
    res = 'Please enter valid numbers';
  } else {
    if (op === '+') res = n1 + n2;
    else if (op === '-') res = n1 - n2;
    else if (op === '*') res = n1 * n2;
    else if (op === '/') {
      res = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
    }
  }
  document.getElementById('result').textContent = res;
}
