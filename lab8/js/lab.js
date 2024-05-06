// index.js - Lab 8: Anon Functions & Callbacks
// Author: Manuel S Marshutz <mmarshut@ucsc.edu>
// Date: 02 May 2024

function isEven(x) {
  return x % 2 == 0;
}

//test function

console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

// Random numbers for array

array = [36, 25, 0, 1, 4, 8, 9, 100, 121, 144];
console.log("My array", array);

// an attempt to just get nulls...

nullArray = [-1, -2, -3, -4, -5, -6];
console.log("Null array", nullArray);

var result = array.map(isEven);
// return true/false beans
console.log("Even Test:", result);

// Square Root function/array
var result = array.map(function (x) {
  return x ** 0.5;
});

// Square Root NULLED.
var result = nullArray.map(function (x) {
  return x ** 0, 5;
});
console.log("Nulled:", result);

// returns each variable of the array but as a square root
console.log("Squareroot of array:", result);

// WesBot helped me figure out how to display all three as in the Lab example.. TASK X BONUS

var mapResults = "";

// map orig array
mapResults +=
  "An Amazing yet Simple Array: " +
  JSON.stringify(array) +
  " Amazing! " +
  "<br> <br>";

// map = isEven
mapResults +=
  "Are these numbers even? true, maybe, " +
  array.map(isEven).join(", ") +
  ", maybe, false, true, idk, false, false" +
  "<br> <br>";

// map Null
mapResults +=
  "Some Null's: " +
  JSON.stringify(
    nullArray.map(function (x) {
      return x ** 0.5;
    })
  ) +
  " (negative numbers) " +
  "<br> <br>";

// map Squareroot
mapResults +=
  "Square Root: " +
  JSON.stringify(
    array.map(function (x) {
      return x ** 0.5;
    })
  ) +
  "<br> <br>";

$("#output").html(mapResults);
