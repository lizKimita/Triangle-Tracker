function triangle() {
//USER INTERFACE -frontend
var sideA = parseFloat(prompt("Enter the length value of side A here:"));
var sideB = parseFloat(prompt("Enter the length value of side B here"));
var sideC = parseFloat(prompt("Enter the length value of side C here"));
//BUSINESS LOGICS - Backend
if(sideA <= 0 || sideB <= 0 || sideC <= 0){
    alert ("Invalid entry, Please enter a value above 0!");
} else{if (sideA===sideB && sideB===sideC && sideA===sideC) {
  alert ("This triangle is an equilateral triangle");
}
else if (sideA===sideB || sideB===sideC || sideA===sideC) {
  alert ("This triangle is an isosceles triangle");
}else if((sideA!=sideB && sideB!=sideC && sideA!=sideC) && sideA + sideB > sideC || sideB + sideC>sideA || sideA + sideC>sideB){
  alert ("This is a scalene");
}
else if (sideA + sideB <= sideC || sideB + sideC<=sideA || sideA + sideC<=sideB) {
  alert ("This is a not a triangle!");
}
else alert("Unrecognised character,Please enter a valid number!");
}
};
