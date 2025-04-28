var user = "DEO";

switch (user) {
    case "Super Admin":
        console.log("You have full access.");
        break;
    case "Admin":
        console.log("You have limited access.");
        break;
    case "DEO":
        console.log("You have view access and update.");
        break;
    case "User":
        console.log("You have view access.");
        break;
}