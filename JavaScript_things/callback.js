// callback

setTimeout(function () {
   console.log('dilip')
},5000)

function x(y){
    console.log('x:', x)
y()
}

x(function y(){
    console.log('y:', y)
});
