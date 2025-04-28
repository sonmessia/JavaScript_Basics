var user = {
    firstName: "Son",
    lastName: "Goku",
    skill: "Kameha",
    isActive: true,
    age: 30,
    getUserInfo: function(role) {
        return `${this.firstName} have full user access, and his role is ${role}`;
    }
}

console.log(user.getUserInfo('Super Admin'));