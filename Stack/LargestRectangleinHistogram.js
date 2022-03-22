


//                     |7|
//    |6|              |6|
//    |5||5||5|
//    |4||4||4|        |4|
//    |3||3||3|   |3|  |3|
//    |2||2||2||2||2|  |2|
// | ||1||1||1||1||1|  |1|
// -----------------------
//  1  6  5  4  2  3  0 7
// var arr=[2,1,2];
// var arr=[2,1,5,6,2,3]
var arr=[1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
// var arr=[1,6,5,4,2,3,0,7];
let store=[];
let n=arr.length;


for(var i=0;i<n;i++){
       
       let count=1;
        let r=i+1;

    while(arr[i]<=arr[r]){
             
              count++;
              r++;
          }
          let l=i-1;
          while(arr[i]<=arr[l] && l>=0){
           
              count++;
              l--;
            }
        store.push(count);
}

console.log(store);

let maxArea=0;
for(var x=0;x<n;x++){
    let area=store[x]*arr[x];
    if(area>maxArea){
        maxArea=area;
}
}
console.log(maxArea);



























// let left=[];
// let right=[];

// for(var i=0;i<n;i++){
//     let count=0;
//   for(var j=i+1;j<n;j++){
//       if(arr[i]<arr[j]){
//           count++;
//       }else{
//           break;
//       }
//   }
//   left.push(count+1); 
// }

// for(var k=n-1;k>=0;k--){
//     let countr=0;
//   for(var l=k-1;l>=0;l--){
//       if(arr[k]<arr[l]){
//           countr++;
//       }else{
//           break;
//       }
//   }
//   right.push(countr+1); 
// }

// console.log(left);
// right.reverse();
// console.log(right);

// let max=0;
// for(var x=0;x<n;x++){
//     let area=arr[x]*(Math.max(left[x],right[x]));
//     if(max<area){
//         max=area
//     }
// }
// console.log(max);