let btn1 = document.querySelector("#btn1");
let a = 25;
btn1.onclick = () => {
  console.log("Handler1");
};
btn1.onclick = () => {
  console.log("Handler2");
};

let box = document.querySelector("div");
box.onmouseover = () => {
  console.log("you are inside div");
};
