// index.js - Lab 9: Libraries & jQuery
// Author: Manuel S Marshutz <mmarshut@ucsc.edu>
// Date: 12 May 2024

// Task X included...
// button for selection change
$(".button").append("<button class='button-challenge'>TOGGLE</button>");

// event listener for clicking

/* $(".button-challenge").click(function () {
  $(".button").toggleClass("special");
}); */

$(".button-challenge").click(function () {
  $(this).parent().toggleClass("special");
});

// unrelated button

$("#destroy").append("<button class='woops'>Do Not Click</button>");

$("#destroy").click(function () {
  $("body").empty();
});
