class Person {
  constructor() {
    this.species = "homo sapiens";
    console.log("enter parent constructor");
  }
  eat() {
    console.log("eact");
  }
}

class Engineer extends Person {
  constructor(branch) {
    console.log("enter child constructor");
    super(); //to invoke parent class constructor
    this.branch = branch;
    console.log("exit parent constructor");
  }
  work() {
    console.log("solve problems, build something");
  }
}

let engObj = new Engineer("chemical");
