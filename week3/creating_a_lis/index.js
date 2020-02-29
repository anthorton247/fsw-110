var body = document.getElementById("body")

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]

for (i = 0; i < names.length; i++) {
    var people = document.createElement("h1")
    people.style.color = "red"
    people.style.fontWeight = 900
    people.style.textShadow = "10px 10px black"
    people.style.textAlign = "center"
    people.textContent = names[i]
    body.append(people)

}