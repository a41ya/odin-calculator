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
let firstNumber = null;
let secondNumber = null;
let currentOperation = null;
let isSecondNumber = false;

let currentInput = input.textContent;
let prev = ""

let result;
//
//functions
//
const add = function(a, b) {
	return +a + +b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
	return a * b;
};

const divide = function(a, b) {
  if (b == 0){
    return "ты как на ноль делить собрался?";
  } else {
    return a / b;
  }
};

function operate (first, second, operation){
  if (operation === "+"){
    return add(first, second);
  } else if (operation === "-"){
    return subtract(first, second);
  } else if (operation === "x"){
    return multiply(first, second);
  } else if (operation === "÷"){
    return divide(first, second);
  }
}

//
function appendFirst(event){
  if (input.textContent == 0 || input.textContent == result){
    firstNumber = event.target.textContent;
    input.textContent = firstNumber;
  } else if (firstNumber.length < 12) {
    firstNumber += event.target.textContent;
    input.textContent = firstNumber;
  } else if (firstNumber.length >= 12){
    return;
  }
}

function appendSecond(event){
  if (secondNumber == null){
    secondNumber = event.target.textContent;
    input.textContent = `${firstNumber} ${currentOperation} ${secondNumber}`;
  } else if (secondNumber.length < 12){
    secondNumber += event.target.textContent;
    input.textContent = `${firstNumber} ${currentOperation} ${secondNumber}`;
  } else if (secondNumber.length >= 12){
    return;
  }
}

function deleteOneChar(){
  if (input.textContent == result){
    clearDisplay();
  }


  if (input.textContent.length === 1){
    return input.textContent = "0";
  } else if (!isSecondNumber){
    firstNumber = firstNumber.slice(0, -1);
    input.textContent = firstNumber;
  } else if (secondNumber){
    secondNumber = secondNumber.slice(0, -1);
    input.textContent = `${firstNumber} ${currentOperation} ${secondNumber}`;
  } 
  
}
function clearDisplay(){
  firstNumber = null;
  secondNumber = null;
  currentOperation = null;
  input.textContent = firstNumber;
  isSecondNumber = false;
  prevInput.style.color = "#181818"
}

function showPrevInput(){
  prevInput.style.color = "gray";
}

function appendNumber (target){
  if (!isSecondNumber){
    appendFirst(target);
    prevInput.style.color = "#181818"
  } else {
    appendSecond(target);
  }
}

function setOperation (event){

  if (firstNumber == null){
    firstNumber = result
  }

  currentOperation = event.target.textContent;
  input.textContent = `${firstNumber}  ${currentOperation}`;
  isSecondNumber = true;
}

function calculateResult(){
  
  if (!secondNumber){
    return;
  }
  prevInput.style.color = "gray";
  prev = `${firstNumber} ${currentOperation} ${secondNumber}`;
  prevInput.textContent = prev;

  isSecondNumber = false
  result = `${operate (firstNumber, secondNumber, currentOperation)}`;

  firstNumber = null
  currentOperation = null
  secondNumber = null
  input.textContent = result;

  
}
//
//listeners
//
clear.addEventListener("click", clearDisplay)
deleteBtn.addEventListener("click", deleteOneChar)

btn0.addEventListener('click', appendNumber)
btn1.addEventListener('click', appendNumber)
btn2.addEventListener('click', appendNumber)
btn3.addEventListener('click', appendNumber)
btn4.addEventListener('click', appendNumber)
btn5.addEventListener('click', appendNumber)
btn6.addEventListener('click', appendNumber)
btn7.addEventListener('click', appendNumber)
btn8.addEventListener('click', appendNumber)
btn9.addEventListener('click', appendNumber)

coma.addEventListener('click', appendNumber)

divideBtn.addEventListener('click', setOperation)
multiplyBtn.addEventListener('click', setOperation)
subtractBtn.addEventListener('click', setOperation)
addBtn.addEventListener('click', setOperation)

equalBtn.addEventListener('click', calculateResult)