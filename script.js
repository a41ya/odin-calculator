//btns
const clear = document.querySelector("#clear")
const deleteBtn = document.querySelector("#delete")
//display
const input = document.querySelector("#input")

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

//
function appendFirst(){

}

function appendSecond(){
  
}
function deleteOneChar(){
  if (input.textContent.length === 1){
    return input.textContent = "0";
  } else {
    input.textContent = input.textContent.slice(0, -1);
  }
  
}
function clearDisplay(){
  input.textContent = "0";
}

//listeners
clear.addEventListener("click", clearDisplay)
deleteBtn.addEventListener("click", deleteOneChar)