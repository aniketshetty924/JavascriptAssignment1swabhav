let fact = (n)=>{
    if(n<0){
        throw new Error("Negative numbers not allowed");
    }
    if(n==0 || n==1) return 1;
    return n*fact(n-1);
}
let number = 12;
console.log(`The factorial of ${number} is : ${fact(number)}`);
