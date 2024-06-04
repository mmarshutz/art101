// index.js - Lab 12: Conditionals
// Author: Manuel S Marshutz <mmarshut@ucsc.edu>
// Date: X June 2024

// code sourced from https://wmodes.github.io/art101/lab13/js/lab12.js

// maxFactors = 4;

// outputEl = document.getElementById("output");

// function getFactorObj() {
//   var factorObj = {};
//   for (var factor = 0; factor < maxFactors; factor++) {
//     numId = "num" + factor;
//     textId = "text" + factor;
//     numValue = document.getElementById(numId).value;
//     textValue = document.getElementById(textId).value;
//     console.log(factor + ") num:", numValue, "text:", textValue);
//     if (numValue && textValue) {
//       factorObj[numValue] = textValue;
//     }
//   }
//   return factorObj;
// }

// function outputToPage(str) {
//   newEl = document.createElement("p");
//   newEl.innerHTML = str;
//   outputEl.appendChild(newEl);
// }

// function fizzBuzzBoom(maxNums, factorObj) {
//   for (var num = 0; num < maxNums; num++) {
//     debugger;
//     var outputStr = "";
//     for (var factor in factorObj) {
//       if (num % factor == 0) {
//         outputStr += factorObj[factor];
//       }
//     }
//     if (outputStr) {
//       outputStr = " - " + outputStr + "!";
//     }
//     outputToPage(num.toString() + outputStr);
//   }
// }

// function reportError(str) {
//   outputEl.innerHTML = "<div class='error'>" + str + "</div>";
// }

// document.getElementById("submit").addEventListener("click", function () {
//   var max = document.getElementById("max").value;
//   console.log("max:", max);
//   if (!max) {
//     reportError("You must provide a maximum");
//     return;
//   }
//   var factorObj = getFactorObj();
//   console.log("factorObj:", factorObj);
//   if (Object.keys(factorObj).length === 0) {
//     reportError("You must provide at least one factor and text");
//     return;
//   }
//   outputEl.innerHTML = "";
//   fizzBuzzBoom(max, factorObj);
//   outputEl.classList.add("cols");
// });

// TASK X with assistance from Wes Bot!

const MAX_FACTORS = 4;
const OUTPUT_ELEMENT_ID = "output";
const SUBMIT_BUTTON_ID = "submit";

const outputEl = document.getElementById(OUTPUT_ELEMENT_ID);

function getFactorObj() {
  const factorObj = {};
  for (let factor = 0; factor < MAX_FACTORS; factor++) {
    const numId = `num${factor}`;
    const textId = `text${factor}`;
    const numValue = document.getElementById(numId).value;
    const textValue = document.getElementById(textId).value;
    console.log(`${factor}) num:`, numValue, "text:", textValue);
    if (numValue && textValue) {
      factorObj[numValue] = textValue;
    }
  }
  return factorObj;
}

function outputToPage(str) {
  const newEl = document.createElement("p");
  newEl.innerHTML = str;
  outputEl.appendChild(newEl);
}

function fizzBuzzBoom(maxNums, factorObj) {
  for (let num = 0; num < maxNums; num++) {
    let outputStr = "";
    for (const factor in factorObj) {
      if (num % factor == 0) {
        outputStr += factorObj[factor];
      }
    }
    if (outputStr) {
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr);
  }
}

function reportError(str) {
  outputEl.innerHTML = `<div class='error'>${str}</div>`;
}

document
  .getElementById(SUBMIT_BUTTON_ID)
  .addEventListener("click", function () {
    const max = document.getElementById("max").value;
    console.log("max:", max);
    if (!max) {
      reportError(
        "<center>You must provide an input in the maximum field</center>"
      );
      return;
    }
    const factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
      reportError(
        "<center>You must provide at least one input within the factor and text field</center>"
      );
      return;
    }
    outputEl.innerHTML = "";
    fizzBuzzBoom(max, factorObj);
    outputEl.classList.add("cols");
  });
