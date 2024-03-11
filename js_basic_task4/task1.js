const numbers = [5, -4, 0, 6, 7, -1, 0, 0];
let countZeros = 0;
let countPositive = 0;
let countNegative = 0;

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    countPositive++;
  } else if (numbers[i] < 0) {
    countNegative++;
  } else {
    countZeros++;
  }
}

console.log(`Zeros = ${countZeros}.`);
console.log(`Positive numbers = ${countPositive}.`);
console.log(`Negative numbers = ${countNegative}.`);
