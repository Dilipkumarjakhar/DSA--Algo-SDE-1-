# DSA--Algo-SDE-1-
<!-- ~~~Amazon~~~ -->


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
//here we are passing the values inside the function is called Arguments
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
- An Arrow Function is used to write an expression in React.
- It allows users to manually bind components easily.
- The functionality of arrow functions is very useful when you are working with higher-order function particularly.


```
Example:
//the usual way
render(){
    <Myinput onChange={this.handleChange.bind(this)}>
}
//Making use of arrow function 
render(){
    return(
    <Myinput onChange={(e)=>this.handleOnChange(e)}>
    )}
```

```
Normal Example:-
var b=function ()=>{
 console.log("Arrow function")
}
b()
o/p:- Arrow function
```
**8.Closure Functions**
- closer in action that is inner function can have access to the outer function variables as well as all the global variables.
- A closure is the combination of a function and lexical
environment within which that function was declared.

- [the return statment does not execute the inner function - function is execute only when followed by (),
but rather then return statment return the entire body of the function.] 
```
let sum=(a)=>{
    let z=10
    function y(a){
        console.log('dilip',a+z)
        
    }
    y(a)
}
sum(1)

o/p:-->dilip 11

let outer=(a)=>{
    let x=a;
    function inner(y){
        console.log('sum',x+y)
        
    }
    // inner(a)
   return inner
}

outer(1);
let store=outer(1);

store(1)
o/p:->sum 2
```

**9.function Hoisting**
- for each function(function declarations) a property is created in the variable object.which is pointing to function
- for each function(variable declarations) a property is created in the variable object.which is set undefined.
- Argument object are created that were passed into the function.
- lin1 and lin2 is called **Hoisting** in js.
- hoisting is js mechanism where variable and function declaration are moved to the top of there scope before code execution.

``` 
this is normale:
const sum=(a,b)=>{
    let c=10;
    console.log(a+b+c);
}
sum(3,4);
o/p:->17
```

```
- This is Hoisting :--------|>
sum(3,4);              |const sum=(a,b)=>{
const sum=(a,b)=>{     | let c=10;
    let c=10;          |  console.log(a+b+c);
    console.log(a+b+c);|  }
}                      |sum(3,4);
                       |
o/p:->17               |o/p:->17  
```

**10.Use Strict**
- It's a new feature of ECMAScript 5.
- The statment 'use strict'; instructs the browser the browser to use the strict mode which is a reduced and safer feature set of js.
```
normale example
function sum(a,b){
    add=a+b;
    console.log(add)
}
sum(10,12)
o/p:-22;
```
```
strict example:-
'use strict'
function sum(a,b){
    add=a+b;
    console.log(add)
}
sum(10,12)
o/p:-add is undefined
```

**11.This Keyword**
- console.log(this)//window object 
**12.Promises**
- Promises are used to handle asynchronous operations in javascript.
- They are easy to manage when dealing with multiple asynchronous operations where callbacks can create hell
leading to unmanageable code.

- A Promise is an object that keeps track about whether
a creation event has happened already or not.

```
```
## React or Front-End
**React**
- React is a widely used javascript library that was launched in 2011.
- it was created by developers at facebook and it is primarily used
for frontend development.
- React uses the component based approach which ensures to help you
build components that possess high reuseability.
- React is well known for developing and designing complex mobile user interfaces and web applications.

**useEffect**
- What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. 
- React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.


**What is the useState in react?**
- The React useState Hook allows us to track state in a function component. 
- State generally refers to data or properties that need to be tracking in an application.

**What is a Redux in React?**
- React Redux is the official React UI bindings layer for Redux. 
- It lets your React components read data from a Redux store, and dispatch actions to the store to update state

**What is react router?**
- React Router is a standard library for routing in React. 
- It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL

**What does callback function do?**
- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action
```
function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```