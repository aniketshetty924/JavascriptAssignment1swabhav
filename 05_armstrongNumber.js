const countDigits =(num)=>{
    num = Math.abs(num);
    if(num==0) return 1;
    let count=0;
    while(num>0){
        num=Math.floor(num/10);
        count++;
    }
    return count;
}

const checkArmstrong=(num)=>{
    const totalDigits = countDigits(num);
    const digits=String(num).split('');

    let sum=0;
    for(let i of digits){
        sum+=Math.pow(Number(i),totalDigits);
    }
    if(sum===num){
        return true;
    }else{
        return false;
    }
}

const printArmstrong=(finalNumber)=>{
    for(let i=0;i<=finalNumber;i++){
        if(checkArmstrong(i)){
            console.log(i);
        }
    }
}
console.log(checkArmstrong(153))
printArmstrong(100000)