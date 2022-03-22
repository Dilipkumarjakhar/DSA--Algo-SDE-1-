

let a=[1,3,6];
let b=[2];

let f=a.length;
let s=b.length;
let fs=0;
let ss=0;
let A=[];
console.log('A:', A)

while(fs<f || ss<s){
    if(a[fs]<=b[ss]){
        A.push(a[fs])
        fs++
    }else if(a[fs]>=b[ss]){
        A.push(b[ss])
        ss++;
    }
 else if(b[ss]==undefined){
           A.push(a[fs]);
           fs++
       }
    else if(a[fs]==undefined){
            A.push(a[ss]);
            ss++
       }

 }
console.log('b:', b[2])

console.log('A:', A)