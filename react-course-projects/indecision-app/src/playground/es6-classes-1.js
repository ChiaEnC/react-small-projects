class Person {
  constructor(name = "anonymous", age) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi I am  ${this.name}`;
  }
  getDescription() {
    return `Hi I am ${this.name} and I am ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major = "undecided") {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += `, her major is ${this.major}`;
    }
    return description;
  }
}
class Traveler extends Person {
  constructor(name, age, homelocation) {
    super(name, age);
    this.homelocation = homelocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homelocation) {
      greeting += ` and I'm visiting from ${this.homelocation}!`;
    }
    return greeting;
  }
}

const me = new Student("Vivian Chiang", 23, "computer science");
console.log(me.hasMajor());
console.log(me.getDescription());
console.log(me);

const traveler = new Traveler("Chia Yen", 24, "Taiwan");
console.log(traveler.getGreeting());
