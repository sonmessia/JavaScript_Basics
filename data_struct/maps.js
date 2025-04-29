var fruits = new Map();

fruits.set(1, "Apple");
fruits.set(2, "Banana");
fruits.set(3, "Cherry");
fruits.set(4, "Date");
fruits.set(5, "Elderberry");

// console.log(fruits);

for (var [key, value] of fruits) {
    console.log(key + " = " + value);
}