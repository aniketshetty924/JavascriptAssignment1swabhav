
let countEvenOddZeores = (arr)=>{
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            zeroCount++;
        }else if(arr[i]%2==0){
            evenCount++;
        }else{
            oddCount++;
        }
    }
    console.log(`Even Count is : ${evenCount}`)
    console.log(`Odd Count is : ${oddCount}`)
    console.log(`Zero Count is : ${zeroCount}`)
}

let arr = [5,7,33,0,4,8,0,2,554,44];
countEvenOddZeores(arr);