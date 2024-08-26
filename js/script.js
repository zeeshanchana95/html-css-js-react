const employee = {
  calcTax() {
    console.log("tax rate is 10%");
  },
};

console.log(employee.calcTax());

const ahmed = {
  salary: 50000,
  calcTax() {
    console.log("tax rate is 20%");
  },
};

ahmed.__proto__ = employee;

// prototype __proto__ is a special js property that each js object has which is basically reference of other object
// *If object & prototype have same method, object's method will be used.
