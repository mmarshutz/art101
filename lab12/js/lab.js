// index.js - Lab 12: Conditionals
// Author: Manuel S Marshutz <mmarshut@ucsc.edu>
// Date: X June 2024

function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor";
  } else if (mod == 1) {
    return "Ravenclaw";
  } else if (mod == 2) {
    return "Slytherin";
  } else if (mod == 3) {
    return "Hufflepuff";
  }
}
// Task X: adding desc
function sortingHouse(houseStr) {
  if (houseStr == 0) {
    return "Welcome to the Gryffindors, you've become part of the jocks of the wizarding world. They're all about honor and bravery and taking risks, whether it's running into a fight against trolls or sneaking around forbidden areas of Hogwarts. But they put up a good front that they are not really breaking any rules, which is hilarious (or hypocritical) because every book involves them breaking the school rules while everybody else is actually trying to follow them. [Disclaimer: All descriptions provided by bot.wmod.es]";
  }

  if (houseStr == 1) {
    return "Welcome to the Ravenclaws, you are now considered the nerds of the wizarding world. They are obsessed with uncovering knowledge and learning, and can be found in the library at all hours, probably with their noses stuck in a book. I mean, they're proud of being smart but have no sense of humor about it - or themselves in general. [Disclaimer: All descriptions provided by bot.wmod.es]";
  }

  if (houseStr == 2) {
    return "Welcome to the Slytherins, you are the sneaky, ambitious, and cunning masterminds of the wizarding world. They're all about climbing to the top and will do whatever it takes to get there – even if that means stomping on their so-called friends. Some might say they are power-hungry, but they just think of themselves as assertive while calling everyone else weak-willed. [Disclaimer: All descriptions provided by bot.wmod.es]";
  }

  if (houseStr == 3) {
    return "Welcome to the Hufflepuffs, with a doubie in one hand and a cigarette in the other, you are part of the stoners of the wizarding world. They're all about peace, love, and acceptance (and snacks). Their loyalty, hard work, and dedication to their friends are legendary. Hufflepuffs are probably some of the few characters in Harry Potter who would actually be fun to hang around with in person without having to deal with their fucking ego or ambition that gets in the way of normal human relationships. [Disclaimer: All descriptions provided by bot.wmod.es]";
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function () {
  var name = document.getElementById("input").value;
  var houseStr = sortingHat(name);
  var desc = sortingHouse(mod);
  newText =
    "<p>The Sorting Hat has sorted you into...</br><b>" +
    houseStr +
    "!</b></br>" +
    desc +
    "</p>";
  document.getElementById("output").innerHTML = newText;
});
