
let arr=[-2,-3,4,-1,-2,1,5,-3];
let n=arr.length;
console.log(LSAsum(arr,n))

function LSAsum(arr,n){
   let a=[]
    let sum=0;
    let max=0;
    for(var i=0;i<n;i++){
          sum=sum+arr[i];
          if(sum>max){
              max=sum;
              a.push(i)
            }
            if(sum<0){
                sum=0;
            }

    }
    
return [a,max];
}