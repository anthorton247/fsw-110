var body = document.getElementById("body")

var header = document.createElement("header")
body.append(header)

var nav = document.createElement("nav")
body.append(nav)

var main = document.createElement("main")
body.append(main)

var footer = document.createElement("footer")
body.append(footer)

var pageTitle = document.createElement("h1");
pageTitle.textContent = "We getting crazy with the JS today";
header.append(pageTitle);

var menuOption1 = document.createElement("h4");
menuOption1.textContent = "Home";
nav.append(menuOption1);

var menuOption2 = document.createElement("h4");
menuOption2.textContent = "About";
nav.append(menuOption2);

var menuOption3 = document.createElement("h4");
menuOption3.textContent = "Contact";
nav.append(menuOption3);

var content = document.createElement("p");
content.textContent = "JavaScript really is cool. I never would have guessed it had so much use and potential when it comes to webpages. To think this whole page is made completey using JavaScript. Truly phenomanal!";
main.append(content);

var list = document.createElement("ul");
main.append(list);

var listItem1 = document.createElement("li");
listItem1.textContent = "I swear to use this power for good";
list.append(listItem1);

var listItem2 = document.createElement("li");
listItem2.textContent = "Maybe being nefarious sometimes..";
list.append(listItem2);

var listItem3 = document.createElement("li");
listItem3.textContent = "Gotta have some fun here and there right?!";
list.append(listItem3);

var siteOwner = document.createElement("h3");
siteOwner.textContent = "By Anthony 'That Dude' Horton";
footer.append(siteOwner);
