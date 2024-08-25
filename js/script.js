let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };

// let box = document.querySelector("div");
// box.onmouseover = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };

btn1.addEventListener("click", (evt) => {
  console.log("button 1 was clicked - handler 1");
});

btn1.addEventListener("click", () => {
  console.log("button 1 was clicked - handler 2");
});

const handler3 = () => {
  console.log("button 1 was clicked - handler 3");
};
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
  console.log("button 1 was clicked - handler 4");
});

btn1.removeEventListener("click", handler3);
