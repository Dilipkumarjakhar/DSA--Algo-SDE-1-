// ---->i/p={
//     {10,20,30,40},
//     {15,25,35,45},
//     {17,27,36,47},
//     {19,41,42,50},
// }

// find=36----->o/p{2,2}
let arr=[
    [10,20,30,40],
    [15,25,35,45],
    [17,27,36,47],
    [19,41,42,50]
]

let k=4;
let n=arr.length;
let col=arr[0].length-1;
let row=0;
console.log(FoundEle(arr,row,col,k))

function FoundEle(arr,row,col,k){
while((0<=row && row<=n-1)||(col>=0 && col<=n-1)){
    if(arr[row][col]===k){
        return ["founded by index:",row,col];
        
    }    
    else if(arr[row][col]>k){
            col--;
        }else{
            row++;
        }
}
return "Element Not Founded";
}
