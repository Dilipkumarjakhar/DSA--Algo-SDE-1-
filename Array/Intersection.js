let A=[1,2,2,3,2,5,5]
let B=[2,2,3]
let C=[1,4,2,3,5,2,5,0];

let res=[];
let newres=[];
for(let i=0;i<B.length;i++){
    for(let j=0;j<A.length;j++){
        if(B[i]===A[j]){
            res.push(B[i])
            // break;
        }
    }
}
for(let i=0;i<res.length;i++){
    for(let j=0;j<C.length;j++){
        if(B[i]==C[j]){
            newres.push(B[i])
            break;
        }
    }
}
console.log('res:', newres)

// let obj1={};
// let obj2={};
// let obj3={};
// let count=1;
// for(let i=0;i<B.length;i++){
//     let ele=B[i];
//     if(!obj1[ele]){
//         obj1[ele]=count;
//     }else{
//         obj1[ele]=count+1;
//     }
    
// }
// console.log('obj:', obj)
// console.log(interSection(A,B,C))
// function interSection(A,B,C){

// let res=[];
// let res1=[];






// for(let i=0;i<A.length;i++){
//     for(let j=0;j<B.length;j++){
//         if(A[i]==B[j]){
//             res.push(A[i]);
//             break;
//         }
//     }
// }

// for(let k=0;k<res.length;k++){
// for(let l=0;l<C.length;l++){
//    if(res[k]==C[l]){
//        res1.push(C[l]);
//        break;
//    }
// }
// }
// if(!res1.length) return [-1];
// return res1;
// console.log('res:', res)
// console.log('res1:', res1)

// }

// interSection(A,B,C)
// function interSection(A,B,C){
//     let set1=new Set();
//     let set2=new Set();
//     let res=[];
//     for(let i=0;i<A.length;i++){
//         set1.add(A[i])
//     }
// for(let j=0;j<B.length;j++){
//         if(set1.has(B[j])){
//             set2.add(B[j])
//         }
//     }
//     console.log('set2:', set2)

//     for(let j=0;j<C.length;j++){
//         if(set2.has(C[j])){
//             res.push(C[j])
//         }
//     }

//     console.log(res);
// }