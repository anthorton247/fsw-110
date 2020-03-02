var body = document.getElementById("body")

const heroes = ["deadpool", "hulk", "cap", "ironman", "batman", "superman", "flash"]

for (i = 0; i < heroes.length; i++) {
    var superDuper = document.createElement("h1")
    superDuper.style.fontSize = "20px"
    superDuper.style.fontWeight = "lighter"
    superDuper.style.fontFamily = "sans-serif"
    superDuper.style.color = "cornflowerblue"
    superDuper.classList.add("border")
    superDuper.textContent = heroes[i]
    body.append(superDuper)
}

