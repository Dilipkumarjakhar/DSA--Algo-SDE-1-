let n=19;
// happy(n);
console.log('happy:', happy(n))
// console.log('x:', x)
// console.log(sum)

function happy(n){
    let sum=0;
    if(n==1){
        return 1;
    }
    while(n>0){
        let rem=n%10;
        sum=sum+rem*rem;
        n=Math.floor((n/10));
     }
   
    n=sum;
    if(n===0){
    return sum;
    }
    else{
        happy(n)
    }
   
   
  return n;      
    }

