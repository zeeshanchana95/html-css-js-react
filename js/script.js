let DATA = "secret information";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("data = ", DATA);
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }

  editData() {
    DATA = "some new value";
  }
}

let student1 = new User("zeeshan", "zeeshan@gmail.com");
student1.viewData();

let student2 = new User("ahmed", "ahmed@gmail.com");
student1.viewData();

let teacher1 = new User("dean", "dean@gmail.com");
teacher1.viewData();

let admin1 = new Admin("admin", "admin@gmail.com");
admin1.editData();
admin1.viewData();
