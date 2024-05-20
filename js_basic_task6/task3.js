function calculate(num1, num2, operator) {
    let operators = ["/", "+", "*", "-"];
    let result;
    if (arguments.length !== 3) {
        throw new Error(`Number of arguments should be equal 3`);
    } else if (!operators.includes(operator)) {
        throw new Error(
            `Operator doesn't match the pattern. Please, use one of these: '/', '+', '*', '-'`
        );
    } else if (
        typeof num1 &&
        typeof num2 === "number" &&
        !isNaN(num1) &&
        !isNaN(num2)
    ) {
        if (operator === "/") {
            if (num2 === 0) {
                throw new Error(`Dividing by zero is forbidden`);
            } else {
                result = num1 / num2;
            }
        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "+") {
            result = num1 + num2;
        } else {
            result = num1 - num2;
        }
    } return `${num1} ${operator} ${num2} = ${result}`;
}

console.log (calculate(100, 0, '*'))
