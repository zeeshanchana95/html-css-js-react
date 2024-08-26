class Person {
  constructor() {
    this.species = "homo sapiens";
  }
  eat() {
    console.log("eact");
  }
  sleep() {
    console.log("sleep");
  }

  work() {
    console.log("do nothing");
  }
}

class Engineer extends Person {
  work() {
    console.log("solve problems, build something");
  }
}
class Doctor extends Person {
  work() {
    console.log("treat patients");
  }
}

let perObj1 = new Person();
perObj1.work();
console.dir(perObj1);

let engObj1 = new Engineer();
console.dir(engObj1);
engObj1.sleep();
engObj1.work();

let docObj1 = new Patient();
docObj1.work();
