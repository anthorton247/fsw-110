var body = document.getElementById("body")

var header = document.createElement("h1")
header.textContent = "Welcome to my JS site"
body.append(header)

var paragrapgh = document.createElement("p")
paragrapgh.textContent = " All of this was created in Javascript."
body.append(paragrapgh)

var list = document.createElement("ol")
body.append(list)

var item1 = document.createElement("li")
item1.textContent = "Javascript is mindblowing"
list.append(item1)

var item2 = document.createElement("li")
item2.textContent = "Each lesson gives me a better understanding of how websites work in the grand scheme"
list.append(item2)

var item3 = document.createElement("li")
item3.textContent = "Soon I will be able to rule the world"
list.append(item3)