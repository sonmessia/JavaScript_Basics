class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    salary = '';
    jobDescription = [];
    getEmployeeInfor() {
        return {name: this.name, email: this.email}
    }

    setJobDescription(description) {
        this.jobDescription.push(description);
    }

    getJobdescription() {
        return this.jobDescription;
    }

    doFollow() {
        return "You are following";
    }
}

class anotherEmployee extends Employee {
    constructor(name, email) {
        super(name, email);
    }
    getAnotherEmployeeInfor() {
        return "I am another employee";
    }
}

module.exports = Employee;


var ala = new anotherEmployee("ala", "ala@gmail.com");
console.log(ala.getAnotherEmployeeInfor());