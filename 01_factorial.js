let findFactorialOfNumber = (number) => {
  if (number < 0) throw new Error("Negative numbers not allowed");

  if (number == 0 || number == 1) return 1;

  return number * findFactorialOfNumber(number - 1);
};
let number = 12;
console.log(`The factorial of ${number} is : ${findFactorialOfNumber(number)}`);
