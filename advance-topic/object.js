const Employee = require("./class.js");
var empl1 = new Employee("Ali", "ali@gmail.com");
console.log(empl1.getEmployeeInfor());
empl1.setJobDescription("Send email");
console.log(empl1.getJobdescription());