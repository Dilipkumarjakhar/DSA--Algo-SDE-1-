// 1.brute force approach  

// let arr=[2,3,48,0,5];
// let k=2;
// let n=arr.length;
// k=k%n;
// for(let i=0;i<n;i++){
//     if(i<k){
//         console.log(arr[n+i-k])
//     }
//     else{
//         console.log(arr[n-1-i])
// }
// }

// 2.optimized
let arr=[2,3,8,0,5];//[5,2,3,8,0]
let k=6;
let n=arr.length;
k=k%n;

function rightrotate(arr,n){
  let temp=arr[n-1];
    for(let i=n-1;i>=0;i--){
        arr[i]=arr[i-1];
    }
       arr[0]=temp;
   
    return;
}
for(let j=1;j<=k;j++){
    rightrotate(arr,n)
    console.log('arr:', arr)
}
