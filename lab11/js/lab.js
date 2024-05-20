// index.js - Lab 8: Anon Functions & Callbacks
// Author: Manuel S Marshutz <mmarshut@ucsc.edu>
// Date: X May 2024

// Task X bonus, replacing nameSort() w/ anagram(), Modes examples provided reference from ChatGPT
function anagram(inputString) {
  const charArray = inputString.split("");
  for (let i = charArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
  }
  const anagram = charArray.join("");
  return anagram;
}

String.prototype.toTitleCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

function sortString(inputString) {
  return inputString.split("").sort().join("");
}

// Task X bonnus; provide seperate input fields that add to initial outut
$("#submit").click(function () {
  // variablees for different fields
  const firstName = $("#first-name").val();
  const middleName = $("#middle-name").val();
  const lastName = $("#last-name").val();
  // anagram function
  newFirstName = anagram(firstName).toTitleCase();
  newMiddleName = anagram(middleName).toTitleCase();
  newLastName = anagram(lastName).toTitleCase();
  // new div appended to output
  $("#output").html(
    '<div class="name-results">' +
      newFirstName +
      " " +
      newMiddleName +
      " " +
      newLastName +
      "</div>"
  );
  // this output changes where my name is as well (for fun)
  $(".title-output").html(
    '<div class="name-results">' +
      "Author: " +
      newFirstName +
      " " +
      newMiddleName +
      " " +
      newLastName +
      "</div>"
  );
});
