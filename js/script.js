let div = document.querySelector("div");
console.log(div);

//get attribute value
let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("para"));

//set attribute
console.log(para.setAttribute("class", "newClass"));

//applying styles
div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";
div.style.visibility = "hidden";

div.style.fontSize = "26px";

div.innerText = "Hello";
