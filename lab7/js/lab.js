// index.js - Lab 7: Functions
// Author: Manuel S Marshutz <mmarshut@ucsc.edu>
// Date: 02 May 2024

// function: pulls username, turns it into an array, sorts it by javascript standards, and puts it back together
// description: returns a "rearranged" username
// parameters: n/a
// returns: userName.split("").sort().join("");

function getNameSort() {
  const userName = window.prompt("What yer name?");
  return (
    userName
      .split("")
      // the function below sorts uppercase and lowercase together
      .sort(function (a, b) {
        return a.localeCompare(b);
      })
      .join("")
  );
}

// this variable prevents the window.prompt getting called twice (help provided by WesBot)

const sortedName = getNameSort();

//output
// document.writeln("I fixed your name: ", sortedName, "</br>");
document.writeln(`<div class="styled-name"> ${sortedName}</div></br>`);
