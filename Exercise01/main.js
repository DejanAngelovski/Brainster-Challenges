const myUl = document.querySelector("ul");

function EmployeeData(_name, _companyName, _jobPostion, _salary) {
  this.name = _name;
  this.companyName = _companyName;
  this.jobPostion = _jobPostion;
  this.salary = _salary;

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
