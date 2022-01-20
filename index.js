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

/************************/

// Arrow Functions

//Refactor one of our earlier functions

const makeBeer3 = function beerFun(qty) {
  return "🍺".repeat(qty);
};

// Arrow refactor
// cool thing about this syntax is that you omit curly braces it will return the value of the function implicitly
const makeWine = (qty) => "🍷".repeat(qty);

// if you add the curly braces you still need to add the return keyword

//arrow function are more than sintactic sugar
// Other caracteristics you should know about arrow functions
// 1. First of all there will always be expression

// (qty) => '🍺'.repeat(qty); // Error!

// 2. They don't have their own this keyword

// ES5 Arrow 'this' Example
function Dog() {
  var self = this;

  this.breed = "Wolf 🐺";

  setTimeout(function () {
    console.log(this.breed); // undefined
    console.log(self.breed); // Wolf 🐺
  }, 0);
}

// with arrow function we don't need this self variable
function Dog() {
  this.breed = "Wolf 🐺";

  setTimeout(() => {
    console.log(this.breed); // Wolf 🐺
  }, 0);
}

// always read the documentation in a framework like React or Vue to see the use of arrow functions

/************************/

// Pure Functions

//what makes a functions pure, we start by showing an impure function

//global variable
let x = 0;

// function mutates the global variable and uses in its return value
// this make the code difficult to work because it's operating with values outside of its scope
const impure = () => {
  x++;
  return x ** 2;
};

const impure2 = () => {
  x--;
  return x.toString();
};

// a pure function is one that only depends on its input parameters and does not depend on any global variables
// easy to test, easy to think about it
// pure functions will help to compose your application as a collection of higher order functions
const pure = (x) => x ** 2;

/************************/

// Higher Order Functions HOF

// you can functions as arguments to other functions
// Use functions a return value for other functions
// very common in javascript specially when you work with async code

const hof1 = (inputFun) => {
  const called = inputFun();
  return () => "output fun";
};

// setTimeout it's a simple example of a HOF
//Example
let haveFun = () => console.log("fun");

setTimeout(haveFun, 50);
setTimeout(() => console.log("fun"), 50);

// Another example of functional code
// we can replace traditional for loops using map

// Example
const numbers = [1, 2, 3, 4, 5];

const squared = [];

for (const i of numbers) {
  squared.push(i ** 2);
}

console.log(squared); // [1, 4, 9, 16, 25]

// we replace everything with a single line of code
const squared2 = numbers.map((num) => num ** 2);

console.log(squared2); // [1, 4, 9, 16, 25]

const squareIt = (num) => num ** 2;
const squared3 = numbers.map(squareIt);

// this is less performant than a for loop but it's still a good example

/************************/

// HOF, Closures

// Lexical environment

//Example 1
//Lexical env a
const a = 1;

const outer = () => {
  //Lexical env b
  const b = 2;
  console.log(a, b, c); // 1 2 undefined
  const inner = (message) => {
    // Lexical env c
    const c = 3;
    return a + b + c;
  };
  return inner;
};

//inner function can remember the local variables in the outer function
// but outer function can't remember the local variables in the inner function

//Example 2
// A closure inspire by react hooks
function useCat() {
  let name = "Fluffy";

  return [() => `Meow ${name}`, (newName) => (name = newName)];
}

const [meow, setName] = useCat();

// Conclusion
//The inner lexical environment or the inner functions in the array had accessed to the local variables and the outer useCat function

/************************/

// Recursion

const theMeaningOFLife = () => {
  theMeaningOFLife();
};

// when this function encounter the function call itself it will go into an infinite loop
const whatIs = theMeaningOFLife();
