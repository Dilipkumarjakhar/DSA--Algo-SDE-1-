// 1.My Solution for Dry run  

let arr=[3,2,2,2,3];
let obj={}
let n=arr.length;
for(let i=0;i<n;i++){
    let count=arr[i]
    if(obj[count]){
        obj[count]=obj[count]+1
    }else{
        obj[count]=1;

    }
}
// console.log(obj);
let res=[];
let N=Math.floor((arr.length/3))
for(let i in obj){
    console.log(i,obj[i])
    if(obj[i]>N){
        res.push(Number(i))
    }
}
console.log(res);
// <------------------------------->
// <------------------------------->

// 2.leetcode solution..   
// T.C=O(n)
// S.C=O(n)
var majorityElement = function(nums) {

    let obj={};
    let result=[];
    let N=Math.floor((nums.length/3))
    for(let i=0;i<nums.length;i++){
        let count=nums[i];
        
        if(obj[count]){
            obj[count]=obj[count]+1;
        }else{
            obj[count]=1;
        }
    }
     
    for(let key in obj){
        if(obj[key]>N){
            result.push(Number(key))
        }
    }
    return result;
      
          
  
};