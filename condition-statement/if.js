var temperature = 5;

if (temperature <= 5) {
    console.log("It's cold outside");
}

if (temperature > 5 && temperature <= 15) {
    console.log("It's cool outside");
}
if (temperature > 15 && temperature <= 25) {
    console.log("It's warm outside");
}
if (temperature > 25) {
    console.log("It's hot outside");
}



if (temperature <= 5) {
    console.log("It's cold outside");
} else if (temperature > 5 && temperature <= 15) {
    console.log("It's cool outside");
}
else if (temperature > 15 && temperature <= 25) {
    console.log("It's warm outside");
}
else {
    console.log("It's hot outside");
}