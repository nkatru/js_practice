function divider(num1) {
  if (num1 === 0) {
    console.log(`You can't delete by ${num1}`);
  } else
    return function (num2) {
      return num2 / num1;
    };
}

console.log(divider(4)(10));
