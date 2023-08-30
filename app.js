// prompt is used to take input

// let username=prompt("Give me your username")


// alert-- is used to pop output on the browser (but it is not the best way to shoe output)

// alert(username)

// document is an api present in every browser
var btnTranslate = document.querySelector("#btn-translate")
var txtInput=document.querySelector("#text-input");
var outputDiv = document.querySelector("#output")

// outputDiv.innerText = "Sadir Irfan"
// console.log(outputDiv)
// console.log(txtInput)

// var txtInputAnother = documnet.querySelectorAll("#text-input-another")
// console.log(txtInputAnother)
//how do users interact with on app--- using eventListner

//addEventListener(what event, what it should do after the event happens)

btnTranslate.addEventListener("click",clickEventHandler)

function clickEventHandler(){
    outputDiv.innerText = "klsjakljajslkj"+" "+txtInput.value
}


