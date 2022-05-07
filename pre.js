
// const demo=(arr,func)=>{
//     while(arr.length-1>0 && !func(arr[arr.length-1]))
//     arr=arr.slice(0,-1);
//     return arr;
// }

// console.log(demo([2,3,4,5],n=>n<4))

// const user={
//     email:'dili@1.com',

//     updateEmail:email=>{
//         this.email=email
//     }
// }
// user.updateEmail('newemail12@demo.com');
// console.log(user.email)

// let a=[1,2,3]
// for(const i=0;i<a.length;i++){
//     console.log(a[i])
// }


// for(let i=0;i<5;i++){

// }
// console.log(i);
// let a=5;
// let b="6"
// let s=a+b;
// console.log(typeof s,a+b);


 //     setTimeout(function () {
//    console.log('dilip')
// },1000)

// function x(y){
//     console.log('x:')
//     y()
// }

// x(function y(){
//     console.log('y:')

// }); -->

//   const n=9;
//  const a=[];
//  for(var i=0;i<=n;i++){
//      a.push(i+1);
//     }
//     console.log('a:', a) 

// <-----objects concept------>
// let x=[]//{1:1}//[]//[1];
// let y=[]//{2:1}//[]//[1];

// x.map((item)=>{
//   console.log(item)
// })
// console.log(x[0]==y[0])//false//flase//true
// console.log(x[0]===y[0])//false//false//true


// <--------concept of closure-------->

// let sum=(a)=>{
//     let z=10
//     let  s=(x)=>{
//         let t=(x)=>{
//             console.log('dilip',x+z)
//         }
//         t(x)
//     }
//     s(a)
// }
// sum(1)//dilip 11

// let outer=(a)=>{
//     let x=a;
//     function inner(y){
//         console.log('sum',x+y)
        
//     }
//     // inner(a)
//    return inner
// }

// outer(1);
// let store=outer(1);
// // console.log('store:', store())
// store(1)
// --------higher order function----->       
// 1.----------map-------
// const arr=[12,3,4,5];

// function double(x){
//     return 2*x;
// }
// function triple(x){
//     return x.toString(2);
// }
// let res1=arr.map(double)
// console.log('res1:', res1)

// let res2=arr.map(triple)
// console.log('res2:', res2)

// let a=[1,2,3,4,5];

// let out=a.map(function(x){
//     return 10*x
// })
// let out=a.map(function(x){
//     return 10*x
// })
// let out=a.map((x)=>1*x)
// console.log('out:', out)

// 2.<-filter----->

// let a=[3,4,5,2,10];

// let out=a.filter((x)=>{
//     return x>5;
// })
// console.log('out:', out)

// 3.reduce

// let a=[1,7,3,9,10,20];

//  let out=a.reduce((acc,curr)=>{
//     acc=acc+curr;
//     return acc;
// },0)
// console.log('out:', out)

//  let mx=a.reduce((max,curr)=>{
//      if(curr>max){
//         max=curr;
//      }
//      return max;
//     },0)
// console.log('out:', mx)

// promises      
// 3 stage      
// 1.pending
// 2.resolve ->fullfilled
// 3.reject
// let prom=new Promise((resolve,reject)=>{
//     let i=1;

//     if(!i){
//         resolve('succes')
//     }
//     else{
//         reject('err')
//     }

// })

// prom.then((suc)=>{
//     console.log(suc)
// })
// prom.catch((err)=>{
//     console.log(err)})

// let x=8;

// let z=(--x)+(x=10);
// let y=x++ + x++ +x++;//8//9//10
// console.log(y)
// console.log(z)
// let a =20;
// function foo(){
//     console.log(a);
//     var a=10;
// }
// foo();
// const obj={a:'dilip',b:'aman',a:'raj'}
// console.log('obj:', obj)
// callback

// const greating=(names)=>{
//     let name='dilip';
//     console.log(name,names)
//     }
// const callback=(callback)=>{
//     let names='callbackname';
//     callback(names)
// }
// callback(greating)

//promiss


// const promise=new Promise((res,rej)=>{
//     let isName=true;
//     if(!isName){
//         res(isName);
//     }
//     else{
//         rej('error')
//     }
// })
// promise.then((res)=>{
//     console.log("resolved",res);
// }).catch((err)=>{
//     console.log(err);
// })

// let a=NaN;

// let b=isNaN;

// console.log(a===null)
// console.log(a===undefined)
// console.log(a!==undefined)
// if(a!==a){
    // console.log("string"*10===a)
    // console.log(a==='string')
    // console.log(a!==a)
    // console.log(isNaN(a))
    // console.log(a===a)
    // console.log(b!==b)
    // console.log(b===b)
    // }
//navigater in javascript

// let nav=navigator.language;
// let nav1=window.navigator.language;
// let userAgent=window.navigator.userAgent;

// let x=document.getElementById("navigater_language");
// x.innerHTML="navigater.language"+":"+nav;
// let y=document.getElementById("window_navigater_lang");
// y.innerHTML="window.navigater.lang"+":"+nav1;

// let browserName;
// if(userAgent.match(/chrome|chromium|crios/i)){
//     browserName = "chrome";
// }else if(userAgent.match(/firefox|fxios/i)){
//     browserName = "firefox";
// }  else if(userAgent.match(/safari/i)){
//     browserName = "safari";
// }else if(userAgent.match(/opr\//i)){
//     browserName = "opera";
// } else if(userAgent.match(/edg/i)){
//     browserName = "edge";
// }else{
//     browserName="No browser detection";
// }
// let z=document.getElementById("navigater_userAgent");
// z.innerHTML=" "+" "+":"+browserName;

// function Game(){
//     this.name="Hockey"
// }
// object=new Game();
// console.log(Object);
// console.log(object);
// console.log('[object Object]'=={})
// // console.log({Object})
// console.log('[Object object]'==={})

let promise = new Promise((resolve, reject) => {
    console.log('1');

    async function d(){
        let a=1;
        if(a){
            await resolve(a);
        }else{
            reject(error)
        }
        
        console.log('res')
    }
    console.log('2');
    d()
    console.log('3')
    
})
promise.then((a)=>console.log(a));
console.log('4')