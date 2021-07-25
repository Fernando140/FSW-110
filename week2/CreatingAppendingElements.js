var newHeader = document.createElement("H1")
newHeader.textContent = "Welcome to my JS site!"
document.body.appendChild(newHeader)

var newParagraph = document.createElement("p")
newParagraph.textContent = "All of this was created with Javascript"
document.body.appendChild(newParagraph)

var newOrderedList = document.createElement("ol")
document.body.appendChild(newOrderedList)

var newListItem1 = document.createElement("li")
var itemText1 = document.createTextNode("This is the first list item")
newListItem1.appendChild(itemText1)

var newListItem2 = document.createElement("li")
var itemText2 = document.createTextNode("This is the second list item")
newListItem2.appendChild(itemText2)

var newListItem3 = document.createElement("li")
var itemText3 = document.createTextNode("This is the third list item")
newListItem3.appendChild(itemText3)

newOrderedList.appendChild(newListItem1)
newOrderedList.appendChild(newListItem2)
newOrderedList.appendChild(newListItem3)