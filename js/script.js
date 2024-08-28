// asynchronous
// function getData(dataId) {
//   console.log("data", dataId);
// }

// synchronous
// function getData(dataId) {
//   setTimeout(() => {
//     console.log("data", dataId);
//   }, 2000);
// }

// getData(1);
// getData(2);
// getData(3);

function getData(dataId, getNextData) {
  //2s
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData()) {
      getNextData();
    }
  }, 2000);
}

//pass callback function: problem - callback hell
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
