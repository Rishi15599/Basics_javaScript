// --------------------------------------Named Function------------------

function myfunc() {
    console.log("Hello World");
}
myfunc()

function add(a, b) {
    console.log("addition = "+a + b);
}
add(4,6)

function sub(a, b) {
    console.log(a - b);
}
sub(10, 5)

function mult(a, b) {
    console.log(a * b);
}
mult(4, 7)

function div(a, b) {
    console.log(a / b);
}
div(40, 8)

function modul(a, b) {
    console.log(a % b);
}
modul(12, 25)

// --------------------------------Anonymous function-------------------

var x=function(a,b){
    console.log(a-b);
}
x(10,60)

// ----------------------------------Immediately Invoking Function  (IIF)-------

;
(
    function(a,b){
        console.log(a+b);
    }
)
(6,8)

// ------------------------------------Arrow function--------------------------------

var z=(a,b)=>a+b
console.log(z(40,60));

var z=(a,b)=>a-b
console.log(z(40,20));

var z=(a,b)=>a*b
console.log(z(40,2.5));

var z=(a,b)=>a/b
console.log(z(20,5));

var z=(a,b)=>a%b
console.log(z(30,45));

// ---------------------------------------------------------CallBack Function----------------

function print(){
    console.log("Hello World");
}
setTimeout(print,5000)







