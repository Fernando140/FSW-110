var header = document.createElement("H1")
header.textContent = "Project 1 Website"
document.body.appendChild(header)

var navItem1 = document.createElement("a")
navItem1.setAttribute("href", "#")
var navText1 = document.createTextNode("First Link")
navItem1.appendChild(navText1)
document.body.appendChild(navItem1)

var navItem2 = document.createElement("a")
navItem2.setAttribute("href", "#")
var navText2 = document.createTextNode("Second Link")
navItem2.appendChild(navText2)
document.body.appendChild(navItem2)

var navItem3 = document.createElement("a")
navItem3.setAttribute("href", "#")
var navText3 = document.createTextNode("Third Link")
navItem3.appendChild(navText3)
document.body.appendChild(navItem3)

var newParagraph = document.createElement("p")
newParagraph.textContent = "Welcome to my first project Website!"
document.body.appendChild(newParagraph)

var unorderedList = document.createElement("ul")
document.body.appendChild(unorderedList)

var listItem1 = document.createElement("li")
var itemText1 = document.createTextNode("First Item")
listItem1.appendChild(itemText1)

var listItem2 = document.createElement("li")
var itemText2 = document.createTextNode("Second Item")
listItem2.appendChild(itemText2)

unorderedList.appendChild(listItem1)
unorderedList.appendChild(listItem2)

var newFooter = document.createElement("footer")
document.body.appendChild(newFooter)

var footerLink = document.createElement("a")
footerLink.setAttribute("href", "#")
var linkText = document.createTextNode("contactEmail@example.com")
footerLink.appendChild(linkText)

newFooter.appendChild(footerLink)