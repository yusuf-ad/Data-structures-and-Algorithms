// ! A class is like an object constructor, or a blueprint for creating objects
class Person {
  constructor(firstName, lastName, birthYear, country = "Türkiye") {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = 2023 - birthYear;
    this.country = country;
    this._skills = ["javascript"];
    this.score = 24;
  }

  // * class methods
  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;

    return fullName;
  }

  appendSkills() {
    return this._skills;
  }

  // * get method allow us to access value from the object
  get getSkills() {
    return this._skills;
  }

  // * set method allow us to modift the value of certain properties
  set setSkills(skill) {
    this._skills.push(skill);
  }

  set increaseScore(score) {
    this.score += score;
  }

  // you cant call static methods on class instant
  static getTimeStamp() {
    return new Date();
  }
}

// CLASS INSTANTIATION
const person1 = new Person("yusuf", "ad", 2003);
const person2 = new Person("ali", "haydar", 2012, "Scotland");
const person3 = new Person("john", "quincy", 1789, "USA");

console.log(person1);
console.log(person1.getFullName());
console.log(person2);
console.log(person3);

person1.score = 31;
console.log(person1.score);

person1.setSkills = "react";
console.log(person1.getSkills);
console.log(person1.appendSkills());

console.log(person1);
console.log(Person.getTimeStamp());

class Teacher extends Person {
  constructor(firstName, lastName, birthYear, country = "türkiye", gender) {
    super(firstName, lastName, birthYear, country);

    this.gender = gender;
  }

  // öğretir
  teach() {
    return `${this.firstName} kodlama öğretiyor`;
  }

  getFullName() {
    return super.getFullName() + " " + `(${this.gender})`;
  }
}

const teacher1 = new Teacher("tayfun", "erbil", 1992, _, "erkek");

console.log(teacher1.teach());
console.log(teacher1.gender);
console.log(teacher1.getFullName());

class Student extends Person {
  // öğrenir
  learn() {
    return `${this.firstName} kodlama öğreniyor`;
  }
}

const student1 = new Student("Zarafet", "erbilen", 1994);

console.log(student1.learn());
console.log(student1.getFullName());
