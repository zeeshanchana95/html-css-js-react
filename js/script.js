//direct way of creating an object
const student = {
  fullName: "Zeeshan Ahmed",
  marks: 94.4,
  printMarks: () => {
    console.log("Marks = ", this.marks);
  },
};
// this = refere to current object we are using
