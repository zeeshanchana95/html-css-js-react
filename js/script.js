function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 3000);
  });
}

//async await
async function getAllData() {
  console.log("getting data 1");
  await getData(1);
  console.log("getting data 2");
  await getData(2);
  console.log("getting data 3");
  await getData(3);
}

// IIFE
(async function getAllData() {
  console.log("getting data 1");
  await getData(1);
  console.log("getting data 2");
  await getData(2);
  console.log("getting data 3");
  await getData(3);
})();

// promise chaining problem
getData(1)
  .then((res) => {
    console.log("getting data 1...");
    return getData(2);
  })
  .then((res) => {
    console.log("getting data 2...");
    return getData(3);
  })
  .then((res) => {
    console.log("getting data 3...");
    return getData(3);
  });

// callback hell problem
console.log("getting data 1...");
getData(1, () => {
  console.log("getting data 2...");
  getData(2, () => {
    console.log("getting data 3...");
    getData(3, () => {
      console.log("getting data 4...");
      getData(4);
    });
  });
});

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
