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


//accumulators 
let firstNumber = null;
let secondNumber = null;
let currentOperation = null;
let isSecondNumber = false;

let currentInput = null;
let prev = null;

let result = null;


//
//functions
//

//math operations
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
    alert("error");
    result = null;
  } else {
    return a / b;
  }
};

//operate function
function operate (first, second, operation){
  switch (operation) {
    case "+":
      return add(first, second);
    case "-":
      return subtract(first, second);
    case "x":
      return multiply(first, second);
    case "÷":
      return divide(first, second);
    default: 
      return null;
  }
}

//append numbers functions
function appendFirst(event){
  if (currentInput == null){
    currentInput = "0";
  }
  
  if (currentInput === "0" && event.target.textContent === ".") {
    currentInput += event.target.textContent;
  } else if (currentInput === "0") {
    currentInput = event.target.textContent;
  } else {
    currentInput += event.target.textContent;
  }

  input.textContent = currentInput;
}

function appendSecond(event){
  if (secondNumber == null){
    currentInput = "0";
  }

  if (currentInput === "0" && event.target.textContent === ".") {
    currentInput += event.target.textContent;
  } else if (currentInput === "0") {
    currentInput = event.target.textContent;
  } else {
    currentInput += event.target.textContent;
  }

  input.textContent = `${firstNumber} ${currentOperation} ${currentInput}`

  secondNumber = +currentInput;
}

//delete one symbol function
function deleteOneChar(){
  if (input.textContent == result){
    clearDisplay();
  }

  if (input.textContent.length === 1){
    currentInput = "0";
    input.textContent = currentInput;
  } else if (!isSecondNumber && currentOperation === null){
    currentInput = currentInput.slice(0, -1);
    firstNumber = currentInput;
    input.textContent = currentInput;
  } else if (secondNumber === null && currentOperation !== null){
    currentOperation = null;
    currentInput = String(firstNumber);
    input.textContent = currentInput;
    isSecondNumber = false;
  } else if (secondNumber !== null){
    currentInput = currentInput.slice(0, -1);
    secondNumber = currentInput;
    input.textContent = `${firstNumber} ${currentOperation} ${secondNumber}`

    if (currentInput == ""){
      secondNumber = null
    }
  }
  
}

// clear all function
function clearDisplay(){
  firstNumber = null;
  secondNumber = null;
  currentOperation = null;
  currentInput = "0";
  input.textContent = currentInput;
  isSecondNumber = false;
  prevInput.style.color = "#181818"
}

//show input function
function showPrevInput(){
  prevInput.style.color = "gray";
}

//for listeners
function appendNumber (event){
  if (!isSecondNumber){
    appendFirst(event);
    prevInput.style.color = "#181818"
  } else {
    appendSecond(event);
  }
}

function setOperation (event){
  if (currentOperation == null){
    firstNumber = +currentInput;
    if (currentInput == null){
      firstNumber = result;
    }
    currentOperation = event.target.textContent;
  }
  
  if(secondNumber == null){
    currentOperation = event.target.textContent;
  } else {
    return;
  }

  input.textContent = `${firstNumber}  ${currentOperation}`;
  
  isSecondNumber = true;
}

function calculateResult(){
  if (secondNumber == null){
    return;
  }
  prevInput.style.color = "gray";
  prev = `${firstNumber} ${currentOperation} ${secondNumber}`;
  prevInput.textContent = prev;

  isSecondNumber = false
  result = `${operate (firstNumber, secondNumber, currentOperation)}`;

  firstNumber = null;
  currentOperation = null
  secondNumber = null

  input.textContent = result;
  
  currentInput = null;
}
//
//listeners
//

//
clear.addEventListener("click", clearDisplay)
deleteBtn.addEventListener("click", deleteOneChar)

//
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

//
divideBtn.addEventListener('click', setOperation)
multiplyBtn.addEventListener('click', setOperation)
subtractBtn.addEventListener('click', setOperation)
addBtn.addEventListener('click', setOperation)

equalBtn.addEventListener('click', calculateResult)