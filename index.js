// Declaration, also called definition or statement

// choose the correct name to you function is as hard as making jokes about programming
// you can think a parameter as a variable that a function will access when it is called
// then you have the body, its where you define the logic
function makeBread(qty) {
  const bread = "🍞".repeat(qty);

  // task or side effect
  console.log(bread);

  // return value
  return bread;
}

// difference between parameters and args
// params are the variables input that you used in the function definition
// arguments are the actual values used when calling the function

// function call
const loaves = makeBread(5);
console.log(loaves); // 🍞🍞🍞🍞🍞
