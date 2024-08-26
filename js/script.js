class Person {
  constructor(name) {
    this.species = "homo sapiens";
    this.name = name;
  }
  eat() {
    console.log("eact");
  }
}

class Engineer extends Person {
  constructor(name) {
    super(name);
  }
  work() {
    super.eat();
    console.log("solve problems, build something");
  }
}

let engObj = new Engineer("zeeshan");
console.dir(engObj);
engObj.work();
