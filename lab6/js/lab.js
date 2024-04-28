// index.js - Lab 6: Arrays & Objects
// Author: Manuel S Marshutz <mmarshut@ucsc.edu>
// Date: 04.27.2024

// Variables
make = "Hyundai";
model = "Veloster";
color = "red";
year = 2012;

secondMake = "Acura";
secondModel = "TLX";
secondColor = "black";
secondYear = "2018";

myTransport = [
  "Hyundai (Rupert)",
  "Acura (Ms. Keisha)",
  "Uber",
  "Bus",
  "Legs",
  "Piggy Back",
];

// Object(s)

myMainRide = {
  make: "Hyundai",
  model: "Veloster",
  color: "red",
  year: 2012,
  age: function () {
    return 2024 - year;
  },
};

mySecondRide = {
  make: "Acura",
  model: "TLX",
  color: "black",
  year: 2018,
  age: function () {
    return 2024 - secondYear;
  },
};

// Function(s)

function sound() {
  console.log("Vroom Vroom...");
}

sound();

// Output

document.writeln("The transportation I use: ", myTransport, "</br>");
document.writeln("</br>");
document.writeln(
  "My main ride: <pre>",
  JSON.stringify(myMainRide, null, "\t"),
  "</pre>"
);
document.writeln(
  "My second (girlfriend's) ride: <pre>",
  JSON.stringify(mySecondRide, null, "\t"),
  "</pre>"
);
