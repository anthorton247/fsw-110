var body = document.getElementById("body")
var squared = document.getElementById("squared")

function greenSquare() {
    squared.style.backgroundColor = "green"
}
function blueSquare() {
    squared.style.backgroundColor = "blue"
}
function redSquare() {
    squared.style.backgroundColor = "red"
}
function yellowSquare() {
    squared.style.backgroundColor = "yellow"
}
function orangeSquare() {
    squared.style.backgroundColor = "orange"
}

body.addEventListener("wheel", orangeSquare)
squared.addEventListener("dblclick", greenSquare)
squared.addEventListener("mouseover", blueSquare)
squared.addEventListener("mousedown", redSquare)
squared.addEventListener("mouseup", yellowSquare)
body.addEventListener("keydown", function (x) {
    var keys = x.which
    if(keys == 82){
        redSquare()
    } else if (keys == 66) {
        blueSquare()
    } else if (keys == 71) {
        greenSquare()
    } else if (keys == 79) {
        orangeSquare()
    } else if (keys == 89) {
        yellowSquare()
    } else {
        squared.style.backgroundColor = "black"
    }
})