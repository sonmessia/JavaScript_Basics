var isLoggedIn = true;
var userEmailVerified = false;
var validCardInfo = false;

if (isLoggedIn) {
    console.log("You are sucsessfully logged in!.");
    if (userEmailVerified) {
        console.log("Your email is verified.");
        if (validCardInfo) {
            console.log("You have a valid card.");
        } else {
            console.log("You need to update your card information.");
        }
    } else {
        console.log("Please verify your email.");
    }
} else {
    console.log("Please log in to continue.");
}