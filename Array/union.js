let a1=[9,2,3]
let a2=[5,2,2,3,2,1];

let one=[...a1,...a2];
const union=(one)=>{
    return [...new Set(one)]
}
console.log(union(one))
console.log(union(one).sort())
console.log(union(one).sort().reverse())