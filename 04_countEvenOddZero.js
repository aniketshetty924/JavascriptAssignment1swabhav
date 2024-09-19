let countEvenOddZeoresInArray = (array) => {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      zeroCount++;
    } else if (array[i] % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  console.log(`Even Count is : ${evenCount}`);
  console.log(`Odd Count is : ${oddCount}`);
  console.log(`Zero Count is : ${zeroCount}`);
};

let array = [5, 7, 33, 0, 4, 8, 0, 2, 554, 44];
countEvenOddZeoresInArray(array);
