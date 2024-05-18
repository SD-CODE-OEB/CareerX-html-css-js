class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //   info() {
  //     console.log(`My Name is ${this.name} and I am ${this.age} years old.`);
  //   }
  getName() {
    console.log(`I am ${this.name}`);
  }
}

class School extends Student {
  constructor(name, school) {
    super(name);
    this.school = school;
  }
  getName() {
    console.log(`I am ${this.name} from This School.`);
  }
  getSchool() {
    console.log(`I am ${this.name} from ${this.school}`);
  }
}
const sc1 = new School("Shoeb", "KNRR");
sc1.getName();
sc1.getSchool();

// const stu1 = new Student("Shoeb", 20);
// stu1.getName();

// const stu2 = new Student("Safoora", 13);
// stu2.getName();

//Abstraction

class aor {
  constructor(l, b) {
    this.l = l;
    this.b = b;
  }
  area() {
    console.log(`Area of Rectangle is ${this.l * this.b}.`);
  }
}

const a1 = new aor(5, 10);
a1.area();
