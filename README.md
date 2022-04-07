# DSA--Algo-SDE-1-
Amazon


## Topics
**1.Anonymous Function**
- A function without name it is called Anonymous function.
```
function (){
}
```
**2.Function Statment and function Declaration**
- Function statment is nothing but writting the normal function.
- Function Statment and function Declaration both are same.
```
function a(){
    console.log("a called")
}
a()
o/p:- a called
```
**3.Function Expression**
- In this function we are assigning the function into b variable.
```
var b=function (){
    console.log("b called")
}
b()
o/p:- b called
```
**4.Named Function Expression**
- In this function we are assigning the function into b variable.
```
var b=function xyz(){
    <!-- console.log(xyz) here it will give function or you access -->
    console.log("b called")
}
b()
o/p:- b called
xyz()
o/p:- refrence error
```
**5.Diffrence Between Parameter & Arguments**
- In this function we are assigning the function into b variable.
```
var b=function (para1,para2){
//these lebels and identifiers are getting the values
 is called parameters.
    console.log(para1,para2)
}
b(1,2)
//here we are passing the values inside the function is called paramentrs
o/p:- 1 2 

```
**6.First Class Functions or First Class Citizens**
- function inside function .
- we can pass the value as argument and we can use that values as parameters in another function .
- Ability to Used like values.
```
var b=function (){
  return function (){

  }

}
    console.log(b())

o/p:- function (){
}

```
**7.Arrow Functions**

```
var b=function ()=>{
 
    console.log("Arrow function")

}
b()
o/p:- Arrow function

```

