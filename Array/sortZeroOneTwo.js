//Dutch Nation Flag Algorithm//

let arr=[0,1,2,1,0,1,2,2,0];
let n=arr.length;
let l=0;
let mid=0;
let r=n-1;

function swap(x,y){
    let temp=arr[y];
    arr[y]=arr[x];
    arr[x]=temp;
}
while(mid<=r){
    switch(arr[mid]){
        case 0: swap(l,mid);
         mid++;
         l++;
         break;
         
         case 1:mid++;
         break;
         case 2:swap(mid,r);
         r--;
         break;
          
    }
}
console.log(arr);