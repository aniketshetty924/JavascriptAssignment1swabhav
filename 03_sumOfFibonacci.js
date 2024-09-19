const fibonacciSum = (finalNumber) => {
  if (finalNumber == 1) return 0;
  if (finalNumber == 2) return 1;

  return fibonacciSum(finalNumber - 1) + fibonacciSum(finalNumber - 2);
};
let finalNumber = 5000;
console.log(
  `Fibonacci sum of ${finalNumber} is : ${fibonacciSum(finalNumber)}`
);
