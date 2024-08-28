//promises
//- eventual completion of task is called promise
//- promise is an object in js which has three states:
//- pending
//- resolve
//- reject

// Example: promise chaining
// function asynFunction1() {
//   return new Promise(() => {
//     setTimeout(() => {
//       console.log("data 1");
//     }, 4000);
//   });
// }

// function asynFunction2() {
//   return new Promise(() => {
//     setTimeout(() => {
//       console.log("data 2");
//     }, 4000);
//   });
// }

// console.log("fetching data 1");
// let p1 = asynFunction1().then(() => {
//   console.log("fetching data 2");
//   asynFunction2().then((res) => {});
// });

// creating promise
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 3000);
  });
}

// chaining promise

//first way
// chaining promise
// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//   });
// });

// second way
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });

// callback hell problem
// getData(1, () => {
//     console.log("getting data 2...");
//   getData(2, () => {
//     console.log("getting data 3...");
//     getData(3, () => {
//         console.log("getting data 4...");
//         getData(4);
//       });
//   });
// });

// console.log("fetching data 1");
// let p1 = asynFunction1();
// p1.then(() => {
//   console.log(res);
//   console.log("fetching data 2");
//   let p2 = asynFunction2();
//   p2.then((res) => {});
// });

// console.log("fetching data 2");
// let p2 = asynFunction2();
// p2.then(() => {
//   console.log(res);
// });

// // creating promises
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("error");
//   });
// };

// using promises
// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//   console.log("rejected", err);
// });

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   // resolve("success");
//   reject("some error occured");
// });
