let newBtn = document.createElement("button");
newBtn.innerText = "click me";

let div = document.querySelector("div");
// div.append(newBtn);
//div.prepend(newBtn);
div.before(newBtn);

let p = document.querySelector("p");
p.after(newBtn);

console.log(newBtn.innerText);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();

// append() vs appendChild()

const parent = document.createElement("div");
const child = document.createElement("p");

// 1. .append accepts Node objects and DOMStrings while .appendChild accepts only Node objects
// Appending Node Objects
parent.append(child); // Works fine
parent.appendChild(child); // Works fine
// Appending DOMStrings
parent.append("Hello world"); // Works fine
parent.appendChild("Hello world"); // Throws error

//2. .append does not have a return value while .appendChild returns the appended Node object
const appendValue = parent.append(child);
console.log(appendValue); // undefined
const appendChildValue = parent.appendChild(child);
console.log(appendChildValue); // <p><p>

//3. .append allows you to add multiple items while appendChild allows only a single item
const childTwo = document.createElement("p");
parent.append(child, childTwo, "Hello world"); // Works fine
parent.appendChild(child, childTwo, "Hello world");
// Works fine, but adds the first element and ignores the rest
