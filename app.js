// prompt is used to take input

// let username=prompt("Give me your username")


// alert-- is used to pop output on the browser (but it is not the best way to shoe output)

// alert(username)

// document is an api present in every browser

// outputDiv.innerText = "Sadir Irfan"
// console.log(outputDiv)
// console.log(txtInput)

// var txtInputAnother = documnet.querySelectorAll("#text-input-another")
// console.log(txtInputAnother)
//how do users interact with on app--- using eventListner

//addEventListener(what event, what it should do after the event happens)

var btnTranslate = document.querySelector("#btn-translate")
var txtInput=document.querySelector("#text-input");
var outputDiv = document.querySelector("#output")

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?"+"text="+text
}

btnTranslate.addEventListener("click",clickEventHandler)

function errorHandler(error){
    console.log("Error occured",error)
    alert("Something wrong with server, try aagin after sometime")
}

function clickEventHandler(){
    var inputText= txtInput.value; //input
    
    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText =translatedText //output
    })
    .catch(errorHandler)
}


