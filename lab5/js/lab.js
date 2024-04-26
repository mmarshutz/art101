// index.js - Lab 5 - Data Types & Variables
// Author: Manuel Marshutz <mmarshut@ucsc.edu>
// Date: 04/25/2024

// define variables
make = "Hyundai";
model = "Veloster";
color = "Red";
year = 2012;

catname = "Puma";
catcolor = "Black";
catage = "2022";

secondcat = "Haku";
secondcatcolor = "Black";
secondcatage = "2022";

// calculate
age = 2024 - year;
old = 2024 - catage;
secondold = 2024 - secondcatage;

//output

document.writeln("Make: " + make + "</br>");
document.writeln("Model: " + model + "</br>");
document.writeln("Color: " + color + "</br>");
document.writeln("Age: " + age + "</br>");
document.writeln("_" + "</br>");
document.writeln("</br>");
document.writeln("<b>" + "Cat Name: " + catname + "</br>");
document.writeln("Cat Color: " + catcolor + "</br>");
document.writeln("Cat Age: " + old + "</br>");
document.writeln("</br>");
document.writeln("Cat Name: " + secondcat + "</br>");
document.writeln("Cat Color: " + secondcatcolor + "</br>");
document.writeln("Cat Age: " + secondold + "</br>");
