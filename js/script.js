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
