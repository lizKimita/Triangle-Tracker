var triangle = function ( sideA, sideB, sideC );
var sideA = parseFloat(prompt("Enter the length value of side A here:"));
var sideB = parseFloat(prompt("Enter the length value of side B here"));
var sideC = parseFloat(prompt("Enter the length value of side C here"));
function return [];

if (sideA===sideB && sideB===sideC && sideA===sideC) {
  alert ("This triangle is an equilateral triangle");
};
else if (sideA===sideB || sideB===sideC || sideA===sideC) {
  alert ("This triangle is an isosceles triangle");
};
else if (sideA + sideB <= sideC || sideB + sideC<=sideA || sideA + sideC<=sideB) {
  alert ("This is a not a triangle!")
}
else {sideA + sideB > sideC || sideB + sideC>sideA || sideA + sideC>sideB)
  alert ("This is a scalene")
