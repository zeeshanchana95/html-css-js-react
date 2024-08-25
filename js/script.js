// Q 01: Qs. Create a new button element. Give it a text "click me", background color of red & text color of white. Insert the button as the first element inside the body tag.
let button = document.createElement("button");
button.innerText = "click me";

button.style.backgroundColor = "red";
button.style.color = "white";

document.querySelector("body").prepend(button);

// Q 02: Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the element. Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.
let p = document.querySelector("p");
p.classList.add("newClass");
p.classList.remove("content");
