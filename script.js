
//  ---Math Functions---

// add function
function add(a,b) {
    return a + b
}

// subtract function
function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    if (b == 0) {
        return `Divide by 0 not allowed`
    }
    else { 
        return a/b}
}


// ---Operations Functions---


function operate() {
    // If no operator previously selected just show the working operator
    if (operator === '') {
        if (workingString !='') {
        currentResult = Number(workingString)}
    }
    else {
        currentResult = operator(Number(currentResult),Number(workingString))
        
    }
    workingString = ''
    
}

function operatorHandler(event) {
    // If there is an operator already selected, operate, then proceed
    console.log(`Before Operation)`)
    displayCurrentInputs()
    operate()
    console.log(`After Operation)`)
    displayCurrentInputs()
    switch (event.target.id) {
        case 'addition':
            operator = add
            break
        case 'subtraction':
            operator = subtract
            break
        case 'multiplication':
            operator = multiply
            break
        case 'division':
            operator = divide
            break
        case 'equals':
            operator = ''
            break
    }
    // if (operator === '') {
    //     resultDisplay.innerHTML = currentResult
    // }
    // else {
    //     resultDisplay.innerhtml = ''
    // }
    resultDisplay.innerHTML = currentResult
    console.log(`After operator Selection`)
    displayCurrentInputs()
}


// Creating Elements

// Define initial variables

let currentResult = 0;
let workingString ='0';
let operator = ''
let resultDisplay = document.querySelector("#result-text")

function inputUpdate(event) {
    workingString = (workingString + event.target.innerHTML)
    resultDisplay.innerHTML = workingString
    displayCurrentInputs()
}


// Add Event Listeners to update workingString for each number selected
let numberButtons = document.querySelectorAll('.number')

for (let i=0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', inputUpdate)
}

// Add operator function handling

let operationsButtons = document.querySelectorAll(".operation")
console.log(operationsButtons)
for (let i=0; i < operationsButtons.length; i++) {
    operationsButtons[i].addEventListener('click', operatorHandler)
}

function displayCurrentInputs() {
    console.log([currentResult,workingString,operator])
}

let clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', (e) => {
    if (workingString === '') {
        currentResult = 0;
        workingString = '';
        operator = '';
        resultDisplay.innerHTML = workingString;
    }

    else {
        workingString = '';
        resultDisplay.innerHTML = currentResult
    }
    

    displayCurrentInputs()
})


// Handle decimal point
let decimalButton = document.querySelector("#decimal")
decimalButton.addEventListener('click',decimal)

// decimal
function decimal(e) {
    if (!(workingString.includes('.'))) {
        workingString = workingString + "."
        resultDisplay.innerHTML = workingString
    }
}
