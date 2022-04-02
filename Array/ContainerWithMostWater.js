let height=[1,1];
        //1 4 6   8-1-2-3-4-7
let n=height.length;
    
let left=[];
    left.push(height[0]);

let right=[];
    right[n-1]=height[n-1];


for(var i=1;i<n;i++){
     if(left[i-1]<height[i]){
         left[i]=height[i]
     }else{
         left[i]=left[i-1];
     }
}

    for(let j=n-1;j>0;j--){
     if(right[j]<height[j-1]){
         right[j-1]=height[j-1]
     }else{
         right[j-1]=right[j];
     }
}
let max=left[0];
let count=0;
for(let k=1;k<n;k++){
    if(max<left[k]){
        max=left[k];
    }
    else if(max==left[k]){
        max=left[k];
        count++;
}
}
let min=right[0];
for(let l=1;l<n;l++){
    if(min>=right[l]){
        min=right[l];
        
    }
}
console.log(left);
console.log(count);
// console.log(max);
console.log(right);
console.log(min);
console.log((count)*min)