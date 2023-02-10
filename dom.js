// console.log(document);
// console.log(document.all);
// console.log(doucment.all[5]);
// document.all[5].innerHTML="amazon"
// console.log(document.all[7])
// document.all[7].innerHTML="bye world"

var heading = document.getElementById('heading')
console.log(heading);
heading.innerHTML="happy republic day"
heading.style.color = "red"

function print(){
    var username = document.getElementById('username').value
    console.log(username)
    event.preventDefault()
}