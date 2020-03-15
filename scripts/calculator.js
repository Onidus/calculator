const resultP = document.getElementById('result');
const historyP = document.getElementById('history');
let resultString = "0";
let resultNumber = 0;
let value = 0;
let historyString = "";
let typedEqual = false;
let lastAction = "sum"; // Used in equals(). Starts as a "sum" because it will add the first input to the initial 0;


//add click event to number buttons 
const buttonNumbers = [
    document.getElementById('calc-0'),
    document.getElementById('calc-1'),
    document.getElementById('calc-2'),
    document.getElementById('calc-3'),
    document.getElementById('calc-4'),
    document.getElementById('calc-5'),
    document.getElementById('calc-6'),
    document.getElementById('calc-7'),
    document.getElementById('calc-8'),
    document.getElementById('calc-9')
];
for(let i = 0; i < buttonNumbers.length; i++){
    generateButton(buttonNumbers[i], i);
}


const buttonDot = document.getElementById('calc-dot');
buttonDot.addEventListener('click', () => {
    if(resultString.indexOf(".") == -1){
        resultString += ".";
    }
    resultP.textContent = resultString;
});


const buttonSum = document.getElementById('calc-plus');
buttonSum.addEventListener('click', () => {
    checkEquals()
    equals(lastAction);
    lastAction = "sum";
    calculateResult();
});


const buttonSubtract = document.getElementById('calc-minus');
buttonSubtract.addEventListener('click', () => {
    checkEquals()
    equals(lastAction);
    lastAction = "subtract";
    calculateResult();
});


const buttonMultiply = document.getElementById('calc-multiply');
buttonMultiply.addEventListener('click', () => {
    checkEquals()
    equals(lastAction);
    lastAction = "multiply";
    calculateResult();
});


const buttonDivide = document.getElementById('calc-divide');
buttonDivide.addEventListener('click', () => {
    checkEquals()
    equals(lastAction);
    lastAction = "divide";
    calculateResult();
});


const buttonEquals = document.getElementById('calc-equals');
buttonEquals.addEventListener('click', () => {
    equals(lastAction);
    calculateResult(value);
    typedEqual = true;
});


const buttonC = document.getElementById('calc-c');
buttonC.addEventListener('click', () => {
    resultString = "0";
    resultNumber = 0;
    value = 0;
    historyString = "";
    typedEqual = false;
    lastAction = "sum";
    calculateResult();
});


const buttonCE = document.getElementById('calc-ce');
buttonCE.addEventListener('click', () => {
    calculateResult(0);
    resultP.textContent = "0";
});





//---------FUNCTIONS

function generateButton(button, num){
    button.addEventListener('click', () =>{
        updateResult(num);
    });
}

function updateResult(num){
    if(resultString == "0"){
        resultString = String(num);
    }else{
        resultString += String(num);
    }
    value = Number(resultString);
    resultP.textContent = resultString;
}

function calculateResult(optionalNumber){
    resultString = "0";
    updateResult(0);
    value = optionalNumber || 0;  //increments on multiple "=" presses.
    resultP.textContent = resultNumber;
}

//calculate last action on new action;
function equals(mode){
    switch(mode) {
        case "sum":
            sum();
            break;
        case "subtract":
            subtract();
            break;
        case "multiply":
            multiply();
            break;
        case "divide":
            divide();
            break;
        case "none":
            break;
    }
}

function checkEquals(){
    if(typedEqual){
        lastAction = "none";
        typedEqual = false;
    }
}

function multiply(){
    resultNumber *= value;
}

function sum(){
    resultNumber += value;
}

function subtract(){
    resultNumber -= value;
}

function divide(){
    resultNumber = resultNumber/value;
}

function percent(a, b){
    return a*b/100;
}