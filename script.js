//btns
const clear = document.querySelector("#clear")
const deleteBtn = document.querySelector("#delete")
const percent = document.querySelector("#percent")

const divideBtn = document.querySelector("#divide")
const multiplyBtn = document.querySelector("#multiply")
const subtractBtn = document.querySelector("#minus")
const addBtn = document.querySelector("#plus")
const equalBtn = document.querySelector("#equal")

const btn7 = document.querySelector("#btn7")
const btn8 = document.querySelector("#btn8")
const btn9 = document.querySelector("#btn9")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn0 = document.querySelector("#btn0")

const changeSign = document.querySelector("#changeSign")
const coma = document.querySelector("#coma")

//display
const input = document.querySelector("#input")
const prevInput = document.querySelector("#prevInput")

//
//functions
//
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

function showPrevInput(){
  prevInput.style.color = "gray";
}

//listeners
clear.addEventListener("click", clearDisplay)
deleteBtn.addEventListener("click", deleteOneChar)