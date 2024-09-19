const fibonacciSum=(number)=>{
    if(number==1) return 0;
    if(number==2) return 1;

    return fibonacciSum(number-1)+fibonacciSum(number-2);
}
let finalNumber = 5000;
console.log(`Fibonacci sum of ${finalNumber} is : ${fibonacciSum(finalNumber)}`);