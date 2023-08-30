// prompt is used to take input

// let username=prompt("Give me your username")


// alert-- is used to pop output on the browser (but it is not the best way to shoe output)

// alert(username)

// document is an api present in every browser
var btnTranslate = document.querySelector("#btn-translate")
// console.log(btnTranslate)


var txtInput=document.querySelector("#text-input")
console.log(txtInput)
//how do users interact with on app--- using eventListner

//addEventListener(what event, what it should do after the event happens)

btnTranslate.addEventListener("click",clickEventHandler)

function clickEventHandler(){
    console.log("clicked")
    console.log("input",txtInput.value)
}


