// let h2 = document.getElementsByTagName("h2");
// h2[0].innerText += " from apna college";

let divs = document.querySelectorAll(".box");
console.dir(divs);

divs.forEach((div) => {
  div.innerText = "new box";
});
