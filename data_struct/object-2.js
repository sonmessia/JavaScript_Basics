// var employee = {
    // name: "",
    // age: 0,
    // salary: 0,
    // getEmployeeInfo: function() {
        // console.log(`Employee Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
    // },
// }
// 
// var empl1 = Object.create(employee);
// console.log(empl1.getEmployeeInfo());
// empl1.name = "John Doe";
// empl1.getEmployeeInfo();
// 


var employee = function(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.getEmployeeInfo = function() {
        console.log(`Employee Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
    }
}

employee.prototype.getName = function() {
    console.log(`Employee Name: ${this.name}`);
}
var empl1 = new employee("John Doe", 30, 50000);
empl1.getEmployeeInfo();

var empl2 = new employee("Jane Smith", 28, 60000);
empl2.getEmployeeInfo();
if (empl2.hasOwnProperty("name")) {
    empl1.getName();
}