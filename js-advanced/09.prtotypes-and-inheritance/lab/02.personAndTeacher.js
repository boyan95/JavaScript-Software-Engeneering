class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class Teacher extends Person {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }
}

function personAndTeacher() {
  return {
    Person,
    Teacher,
  };
}
console.log(personAndTeacher());
let p = new Person("Pesho", "pesho@pesho.com");
let t = new Teacher("Gosho", "gesho@pesho.com", "Math");
console.log(p.name);
console.log(p.email);
console.log(t.name);
console.log(t.email);
console.log(t.subject);
console.log(p);
