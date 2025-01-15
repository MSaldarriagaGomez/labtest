const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

const divide = function(a, b) {
  if (b === 0) {
      throw new Error("No se puede dividir entre cero");
  }
  else{
  return a / b};
};

const multiply= function(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, multiply: multiply, divide: divide};