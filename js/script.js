//Error Handling

//in js if there is any error occur in the middle of the code, program stop execution at that point. So, we need to handle the error so that our program can continue execution and for this we use Error Handling strategy using try-catch (Exception Handling strategy)

let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a + b = ", a + b);
try {
  console.log("a + b = ", a + c); //error
} catch (err) {
  console.log(err);
}
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
