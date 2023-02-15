var inputText = document.querySelector("#iptext");
var butt = document.querySelector("#transmit");
var display = document.querySelector("#decoded");

var apiUrl = "https://api.funtranslations.com/translate/mandalorian.json";

function decode(text) {
    return apiUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error", error);
    alert("error loading the server,try again later ");
}

function lolia() {
    var ipt = inputText.value;
    fetch(decode(ipt))
        .then(res => res.json())
        .then(data => {
            var recvd = data.contents.translated;
            display.innerText = recvd;
        })
        .catch(errorHandler);


}
butt.addEventListener("click", lolia);