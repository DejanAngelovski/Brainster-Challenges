const myUl = document.querySelector("ul");

function EmployeeData(name, companyName, jobPostion, salary) {
  this.name = name;
  this.companyName = companyName;
  this.jobPostion = jobPostion;
  this.salary = salary;

  this.data = function () {
    let myList = document.createElement("li");
    myUl.append(myList);
    myList.innerHTML = `${this.name}:${this.companyName},${this.jobPostion},${this.salary}`;
  };
}

const stefan = new EmployeeData("Stefan", "Makpetrol", "Employee", "600$");
stefan.data();

const kire = new EmployeeData("Kire", "MVR", "Boss", "850$");
kire.data();

const stefani = new EmployeeData("Stefani", "NLB", "Director", "1800$");
stefani.data();
