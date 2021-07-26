for (var i = 0; i < 10; i++) {
    var header1 = document.createElement("h1")
    header1.textContent = "Hello World"
    document.body.appendChild(header1)
    header1.style.color = "green"
    header1.style.textAlign = "center"
}

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

for (var i = 0; i < names.length; i++) {
    var listNames = document.createElement("ul")
    document.body.appendChild(listNames)
    var addName = document.createElement("li");
    addName = names[i];
    listNames.append(addName)
}