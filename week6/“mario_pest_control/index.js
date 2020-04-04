let totalCheep = document.getElementById("totalCheeps")
let totalBobs = document.getElementById("totalBobs")
let totalGoombas = document.getElementById("totalGoombas")
let totalPrice = document.getElementById("totalPrice")
let totalCheepPrice = 0
let totalBobPrice = 0
let totalGoombaPrice = 0

document.getElementById("cheepButton").addEventListener("click", function(e){
    totalCheep.textContent = document.cheepCheep.cheepCount.value
    totalCheepPrice = parseInt(document.cheepCheep.cheepCount.value) * 11
    if(totalCheepPrice != 0 || totalBobPrice != 0 || totalGoombaPrice != 0) {
        totalPrice.textContent = totalCheepPrice + totalGoombaPrice + totalBobPrice
    }
})

document.getElementById("bobButton").addEventListener("click", function(e){
    totalBobs.textContent = document.bobOmb.bobCount.value
    totalBobPrice = parseInt(document.bobOmb.bobCount.value) * 7
    if(totalCheepPrice != 0 || totalBobPrice != 0 || totalGoombaPrice != 0) {
        totalPrice.textContent = totalCheepPrice + totalGoombaPrice + totalBobPrice
    }

})

document.getElementById("goombaButton").addEventListener("click", function(e){
    totalGoombas.textContent = document.goomba.goombaCount.value
    totalGoombaPrice = parseInt(document.goomba.goombaCount.value) * 5 
    if(totalCheepPrice != 0 || totalBobPrice != 0 || totalGoombaPrice != 0) {
        totalPrice.textContent = totalCheepPrice + totalGoombaPrice + totalBobPrice
    }
})
