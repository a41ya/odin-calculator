const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
	return a * b;
};

const divide = function(a, b) {
	return a / b;
};

function operate (first, second, operation){
  if (operation === "+"){
    return add(first, second);
  } else if (operation === "-"){
    return subtract(first, second);
  } else if (operation === "*"){
    return multiply(first, second);
  } else if (operation === "/"){
    return divide(first, second);
  }
}

console.log(operate(5, 7, "+"))