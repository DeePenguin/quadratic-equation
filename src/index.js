 module.exports = function solveEquation(equation) {
  // your implementation
  const tmpArrayOfValues = equation.split(' ');
  const concatSign = (sign, number) => {
   if (sign === '+'){
     return number;
   } else {
     return sign + number;
   }
  };

  const a = parseInt(tmpArrayOfValues[0], 10);
  const b = parseInt(concatSign(tmpArrayOfValues[3],tmpArrayOfValues[4]), 10);
  const c = parseInt(concatSign(tmpArrayOfValues[7],tmpArrayOfValues[8]), 10);

  const squaredB = Math.pow(b, 2);
  const discriminant = squaredB - 4 * a * c;

  const x1 = (-b + Math.sqrt(discriminant)) / (2 *a);
  const x2 = (-b - Math.sqrt(discriminant)) / (2 *a);

  let solutions = [];
  solutions.push(Math.round(x1));
  solutions.push(Math.round(x2));
  solutions.sort((left, right) => left - right);
  return solutions;
}