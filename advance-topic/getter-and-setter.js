class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    salary = '';
    #jobDescription = [];
    getEmployeeInfor() {
        return {name: this.name, email: this.email}
    }

    setJobDescription(description) {
        this.#jobDescription.push(description);
    }

    getJobdescription() {
        return this.#jobDescription;
    }
}

module.exports = Employee;

var ali = new Employee('ali', 'ali@gmail.com');
console.log(ali.getEmployeeInfor());
ali.setJobDescription('Clean the floor');
console.log(ali.getJobdescription());
console.log(ali.jobDescription);