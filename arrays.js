let num=[1,2,3,4,5]
console.log(num);
console.log(num[0]);
console.log(num[1]);
// ----------------------------------Push----------------------------1
num.push(6)
console.log(num);
// -----------------------------------POP----------------------------2
num.pop()
console.log(num);
// ------------------------------------Slice-------------------------3
let car=["bmw","hyundai","kia","tata"]
var x=car.slice(1,3)
console.log(x);
console.log(car);
console.log(car.slice(0,-1));
//-------------------------------------Splice--------------------------4
let bike = ["A", "B", "C", "D", "E", "F", "G"]
console.log(bike);
bike.splice(2, 0, "a", "b", "c")
console.log(bike);
bike.splice(2, 8)
console.log(bike);
// --------------------------------------------map----------------------5
let sal = [1000000, 2000000, 20000, 3500000, 2500000, 400000]
console.log(sal);
function incSalary(sal) {
    return sal + 1000000
}
let upadatSalary = sal.map(incSalary)
console.log(upadatSalary);

var x = sal.map((sal) => {
    return sal + 111
})
console.log(x);
// ------------------------------------------filter------------------------6
let sal1 = [1000000, 2000000, 20000, 3500000, 2500000, 400000]
var x = sal1.filter((sal1)=>{
    return sal1>400000
})
console.log(x);
// ----------------------------------------------------includes-------------7
let laptop=["hp","dell","mac","asus","realme"]
var x=laptop.includes("dell")
console.log(x);
var x=laptop.includes("DELL")
console.log(x);
//----------------------------------------------------- Sort ----------------8
let tv=["sony","samsung","mi","vu","oneplus","apple"]
var x=tv.sort()
console.log(x);

let numbers=[12,23,34,12,5,676,8989,56]
var x=numbers.sort()
console.log(x);

var x=numbers.sort(function(a,b){
    return a-b
})
console.log(x);

var x=numbers.sort((a,b)=>b-a)
console.log(x);
// ---------------------------------------------------------- Revers ----------------9
let mobile=["sony","samsung","mi","vu","oneplus","apple"]
console.log(mobile);
var x=mobile.sort().reverse()
console.log(mobile);
console.log(x);
//------------------------------------------------------------- unshift -----------------10
let watch=["rolex","fastrack","titan","hmt","gester"]
console.log(watch);
watch.unshift("apple")
console.log(watch);
// -------------------------------------------------------------- shift -----------------11
let watch1=["rolex","fastrack","titan","hmt","gester"]
console.log(watch1);
watch1.shift()
console.log(watch1);
// -------------------------------------------------------------- indexOf -----------------12
let watch2=["rolex","fastrack","titan","hmt","gester"]
console.log(watch2);
var x=watch2.indexOf("Samsung")
console.log(x);

let watch3=["Samsung","rolex","fastrack","titan","hmt","gester"]
console.log(watch3);
var x=watch3.indexOf("Samsung")
console.log(x);

// -------------------------------------------------------------- lastindexOf -----------------13
let watch4=["Samsung","rolex","fastrack","Samsung","titan","hmt","gester"]
console.log(watch4);
var x=watch4.lastIndexOf("Samsung")
console.log(x);

// -------------------------------------------------------------- join -----------------14
let watch5=["Samsung","rolex","fastrack","Samsung","titan","hmt","gester"]
console.log(watch5);
var x=watch5.join(" !*! ")
console.log(x);

// -------------------------------------------------------------- length -----------------15
let watch6=["Samsung","rolex","fastrack","Samsung","titan","hmt","gester"]
console.log(watch6);
var x=watch6.length
console.log(x);

// -------------------------------------------------------------- toString -----------------16
let watch7=["Samsung","rolex","fastrack","Samsung","titan","hmt","gester"]
console.log(watch6);
var x=watch7.toString()
console.log(x);

// -------------------------------------------------------------- toString -----------------17
let watch8=["Samsung","rolex","fastrack","Samsung","titan","hmt","gester"]
let laptop1=["hp","dell","mac","asus","realme"]
let tv1=["sony","samsung","mi","vu","oneplus","apple"]
var x=watch8.concat(laptop1,tv1)
console.log(x);