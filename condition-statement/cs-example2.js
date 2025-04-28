var logginInWithEmail = false;
var logginInWithFB = false;
var logginInWithGoogle = false;
var logginInWithApple = false;



if (logginInWithEmail || logginInWithFB || logginInWithGoogle || logginInWithApple) {
    console.log("You are successfully logged in!");
    if (logginInWithEmail) {
        console.log("You logged in with email.");
    } else if (logginInWithFB) {
        console.log("You logged in with Facebook.");
    } else if (logginInWithGoogle) {
        console.log("You logged in with Google.");
    } else if (logginInWithApple) {
        console.log("You logged in with Apple.");
    }
} else {
    console.log("You not allow to access dashboard.");
}