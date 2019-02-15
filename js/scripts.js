function triangle() {
//USER INTERFACE
var sideA = parseFloat(prompt("Enter the length value of side A here:"));
var sideB = parseFloat(prompt("Enter the length value of side B here"));
var sideC = parseFloat(prompt("Enter the length value of side C here"));
//BUSINESS LOGICS
if (sideA===sideB && sideB===sideC && sideA===sideC) {
  alert ("This triangle is an equilateral triangle");
}
else if (sideA===sideB || sideB===sideC || sideA===sideC) {
  alert ("This triangle is an isosceles triangle");
}else if((sideA!=sideB && sideB!=sideC && sideA!=sideC) && sideA + sideB > sideC || sideB + sideC>sideA || sideA + sideC>sideB){
  alert ("This is a scalene");
}
else if (sideA + sideB <= sideC || sideB + sideC<=sideA || sideA + sideC<=sideB) {
  alert ("This is a not a triangle!");
}};
