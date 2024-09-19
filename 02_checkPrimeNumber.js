
const isPrime = (n)=>{
    if(n<=1) return false;
    for(let i=2;i*i<=n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

let number = 19;
if(isPrime(number)){
    console.log(`${number} is a Prime Number!`)
}else{
    console.log(`${number} is NOT A Prime Number!`)
}