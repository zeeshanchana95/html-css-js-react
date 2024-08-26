// function hello() {
//   console.log("Hello");
// }
// setTimeout(hello, 4000);

//synchronous programming: where one instruction waits for other instruction to complete before moving forward

//asynchronous programming: where instructions don't wait for other instruction to complete before moving forward

console.log("one");
console.log("two");

setTimeout(() => {
  console.log("hello");
}, 4000);

console.log("three");
console.log("four");
