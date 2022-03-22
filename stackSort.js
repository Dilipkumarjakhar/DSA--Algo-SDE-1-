
let arr=[4,1,3,2];

//a=4 arr=1

let a=[];
arr.push(arr[0]);


for(var i=1;i<arr.length;i++){
    let p=a.pop();
       if(arr[i]<p){
            while(a.length>0){
               a.push(arr[i]);
               a.push(p);
        }
    }
}
