const countDigitsOfCurrentNumber = (currentNumber) => {
  currentNumber = Math.abs(currentNumber);
  if (currentNumber == 0) return 1;
  let countOfDigits = 0;
  while (currentNumber > 0) {
    currentNumber = Math.floor(currentNumber / 10);
    countOfDigits++;
  }
  return countOfDigits;
};

const checkArmstrong = (currentNumber) => {
  const totalDigitsOfCurrentNumber = countDigitsOfCurrentNumber(currentNumber);
  const digitsArray = String(currentNumber).split("");

  let sum = 0;
  for (let i of digitsArray) {
    sum += Math.pow(Number(i), totalDigitsOfCurrentNumber);
  }
  if (sum === currentNumber) {
    return true;
  } else {
    return false;
  }
};

const printArmstrongNumbers = (finalNumber) => {
  for (let i = 0; i <= finalNumber; i++) {
    if (checkArmstrong(i)) {
      console.log(i);
    }
  }
};
let finalNumber = 100000;
printArmstrongNumbers(finalNumber);
