var myNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45];
// console.log(myNumber.fill(1));

function checkAge(age) {
    return age >= 18;
}

console.log(myNumber.filter(checkAge));