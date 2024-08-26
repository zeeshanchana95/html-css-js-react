//class is a blueprint for creating objects

// constructor() is a method in js which is automatically invoked when creating a new object

class ToyotaCar {
  constructor(brand, milege) {
    console.log("creating new object");
    this.brand = brand;
    this.milege = milege;
  }

  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
}

let fortuner = new ToyotaCar("fortuner", 10); //constructor invoked
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12); //constructor invoked
console.log(lexus);
