class Company {
  constructor() {
    this.departments = {};
  }
  addEmployee(name, salary, position, department) {
    if (!name || !salary || !position || !department || Number(salary) < 0) {
      throw new Error("Invalid input!");
    }
    if (!this.departments[department]) {
      this.departments[department] = [];
    }
    this.departments[department].push({ name, salary, position });
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }
  bestDepartment() {
    let currentBest = {
      name: "",
      salary: 0,
    };
    for (let department in this.departments) {
      let averageSalary = 0;
      this.departments[department].forEach((employee) => {
        averageSalary += employee.salary / this.departments[department].length;
      });
      if (currentBest.salary < averageSalary) {
        currentBest.name = department;
        currentBest.salary = Number(averageSalary);
      }
    }
    let output = [];
    output.push(`Best Department is: ${currentBest.name}`);
    output.push(`Average salary: ${currentBest.salary.toFixed(2)}`);
    this.departments[currentBest.name]
      .sort((a, b) => {
          //its employees sorted by their salary by descending order 
          //and by their name in ascending order as a second criterion:
        return b.salary - a.salary || a.name.localeCompare(b.name);
      })
      .forEach((employee) =>
        output.push(`${employee.name} ${employee.salary} ${employee.position}`)
      );

    return output.join("\n");
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
