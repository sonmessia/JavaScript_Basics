function divide(a, b) {
  try {
    if (b === 0) 
      throw new Error("Division by zero is not allowed.");
      return a / b;
  } catch (error) {
    console.error("Error: ", error.message);
    return null;
  }
}

console.log(divide(4, 2));

console.log(divide(4, 0));