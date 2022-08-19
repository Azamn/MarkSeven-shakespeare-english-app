var translateButton = document.querySelector("#translate-btn");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(input)
{
    return serverURL + "?" + "text=" + input;
}

function errorHandler()
{
    console.log("Error occured" + error);
    alert("Something went wrong with the server!! Please try again later")
}

function clickHandler()
{
    var inputText = textInput.value;
    
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(function logJSON(json){
        var translatedText = json.contents.translated;
        textOutput.innerText = translatedText;
    })
    
    .catch(errorHandler);
}


translateButton.addEventListener("click", clickHandler);




