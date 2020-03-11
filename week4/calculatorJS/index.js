var addSubButton = document.getElementById("addSub")
var multiButton = document.getElementById("multiplication")
var divButton = document.getElementById("division")
var plusMinus = document.getElementById("plusMinus")

plusMinus.addEventListener("click", function() {
    if (plusMinus.textContent == "+") {
        plusMinus.textContent = "-"
    } else {
        plusMinus.textContent = "+"
    }
})

addSubButton.addEventListener("click" , function() {
    var valPM1 = parseInt(document.getElementById("plusMinusInput1").value) 
    var valPM2 = parseInt(document.getElementById("plusMinusInput2").value)
    var plusMinusAnswer = document.getElementById("addSubAnswer")
    if(Number.isInteger(valPM1 && valPM2)) {
        if(plusMinus.textContent == "+"){
            plusMinusAnswer.value = valPM1 + valPM2
            plusMinusAnswer.textContent = plusMinusAnswer.value
        } else {
            plusMinusAnswer.value = valPM1 - valPM2
            plusMinusAnswer.textContent = plusMinusAnswer.value
        }
    } else {
        plusMinusAnswer.textContent = "*ERROR USE ONLY NUMBERS*"
    }
})

multiButton.addEventListener("click", function() {
    var valM1 = parseInt(document.getElementById("multiInput1").value) 
    var valM2 = parseInt(document.getElementById("multiInput2").value)
    var multiAnswer = document.getElementById("multiAnswer")
    if(Number.isInteger(valM1 && valM2)) {
        multiAnswer.value = valM1 * valM2
        multiAnswer.textContent = multiAnswer.value
    } else {    
        plusMinusAnswer.textContent = "*ERROR USE ONLY NUMBERS*"
    }
})

divButton.addEventListener("click", function() {
    var valDiv1 = parseInt(document.getElementById("divInput1").value) 
    var valDiv2 = parseInt(document.getElementById("divInput2").value)
    var divAnswer = document.getElementById("divAnswer")
    if(Number.isInteger(valDiv1 && valDiv2)) {
        divAnswer.value = valDiv1 / valDiv2
        divAnswer.textContent = divAnswer.value
    } else {
        divAnswer.textContent = "*ERROR USE ONLY NUMBERS*"
    }
})