function print(){
    var number = document.getElementById('number').value
    console.log(number)
    event.preventDefault() //stop the refresh the page

    var tel = document.getElementById('tel').value
    console.log(tel)
    event.preventDefault()

    var email = document.getElementById('email').value
    console.log(email)
    event.preventDefault()

    var password = document.getElementById('password').value
    console.log(password)
    event.preventDefault()

    var text = document.getElementById('text').value
    console.log(text)
    event.preventDefault()
}