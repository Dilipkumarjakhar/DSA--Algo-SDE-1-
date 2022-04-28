
// let arr=['a','b','a','b','c'];
let arr=[1,2,3,4,5,6,1,4,5];
// const a=arr.forEach((ele,index)=>{
//     console.log(ele+"-"+index+"-"+arr.indexOf(ele))
// })
const x=arr.filter((c,index)=>{
    return index==arr.indexOf(c)
   })
console.log('x:', x)
let uniq=[];
const z=arr.forEach((ele)=>{
    if(!uniq.includes(ele)){
        uniq.push(ele)
    }
})
console.log('uniq:', uniq)


// console.log([...new Set(arr)])