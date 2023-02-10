// function message(){
//     alert("Thanks for visiting the page")
// }

function newImage(){
    document.getElementById('changeImage').src="./84.jpg"
}

function oldImage(){
    document.getElementById('changeImage').src="./83.jpg"
}

function newImage1(){
    document.getElementById('changeImage1').src="./fast-delivery.png"
}

function oldImage1(){
    document.getElementById('changeImage1').src="./delivery.png"
}
// ------------------------------------------------------------------------

function changeColor(){
    document.getElementById('para').style.color="red"
}

function changeStyle(){
    var x=document.getElementById('para')
    x.style.cssText="color:blue;text-align:justify;font-size:30px"
}

// -----------------------------------------------------------------------------

function changeKey(){
    alert("You have Clicked")
}

function releaseKey(){
    alert("You have Released The Key")
}
