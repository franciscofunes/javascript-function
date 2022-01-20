/*
 * Javascript Functions - What's your function?
 */

// Function Declaration, also called definition or statement

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

/************************/

// Function Expression
// using a function as a variable
// using a anonymous function, a function with a name as a value

const makeBeer = function (qty) {
  return "🍺".repeat(qty);
};

// function Declaration is hoisted while the function expression is not
// This means You can make calls to a function before it is defined

// Here an example, read comments in the code

// Declaration

const loaves2 = makeBread(7); // WORKS!

function makeBread2(qty) {
  return "🍞".repeat(qty);
}

const beers2 = makeBeer2(7); // makeBeer2 is not defined

// Function Expression
const makeBeer2 = function (qty) {
  return "🍺".repeat(qty);
};

// most people today use function expressions
// because there are not hoisted
// make it easier to understand where their belong in the context of an application
// less likely to pollute the global namespace

/************************/

// Immediately Invoked Function Expression IIEF
// By wrapping in parenthesis, we can make it an IIFE and call it immediately with the ()
//example
(function () {
  const x = 23;
})();

/************************/

// Params and Arguments

// Arguments

// Positional
// when you call the function you need the pass the arguments in the correct order

function makeBreakfast(main, side, drink) {
  console.log(arguments); // {[Iterator] 0: "🍳", 1: "🥪", 2: "🍺"}
  return `Breakfast includes ${main}, ${side}, and ${drink}`;
}

const breakfast = makeBreakfast("🥐", "🥟", "🍺");

console.log(breakfast); // Breakfast includes 🥐, 🥟, and 🍺

// when you have a lot of arguments, you can use the arguments object

function makeLunch(opts) {
  const { main, side, drink } = opts; // destructuring
  return `Lunch includes ${main}, ${side}, and ${drink}`;
}

// with this approach you dont have to worry about the order of the arguments
// Also make it more flexible for extending your application
makeLunch({ main: "🍳", side: "🥪", drink: "🍺" });

// Rest Parameters
function makeDinner(...args) {
  return `Dinner includes the following items: ${args.join(", ")}`;
}

// that allows to call the function with multiple position arguments
// access them as an array inside the function body
makeDinner("🍳", "🥪", "🍺");
