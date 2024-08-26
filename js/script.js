// Inheritance: passing down properties and methods from parent class to child classes

class Parent {
  hello() {
    console.log("Hello");
  }
}

class Child extends Parent {}

let obj = new Child();
obj.hello(); //Hello
