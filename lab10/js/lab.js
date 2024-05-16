// index.js - Lab 8: Anon Functions & Callbacks
// Author: Manuel S Marshutz <mmarshut@ucsc.edu>
// Date: 15 May 2024

// random text from sample function

function generateRandomText() {
  const text =
    "Blah blah blah blah blah blah. Blah blah blah. Blah blah blah, blah blah blah blah blah... BLAH BLAH BLAH!";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  return text
    .replace(/^\s+/, " ")
    .trim()
    .slice(randStart, randStart + randLen);
}

// Add random text

$("#make-convo").click(function () {
  let newText = generateRandomText();
  newText = newText.charAt(0).toUpperCase() + newText.slice(1);
  $("#output-2").append('<div class="text"><p>' + newText + "</p></div>");
});

// Input personal text

$(".input").click(function () {
  var inputText = prompt("Text Message: ");
  $("#output-2").append('<div class="text"><p>' + inputText + "</p></div>");
});
