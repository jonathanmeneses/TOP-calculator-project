
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

function operate() {
    // If no operator previously selected just show the working operator
    if (operator === '') {
        currentResult = Number(workingString)
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
    workingString = Number(workingString + event.target.innerHTML)
    resultDisplay.innerHTML = workingString
    displayCurrentInputs()
}


// Add Event Listeners to update workingString for each number selected
let numberButtons = document.querySelectorAll('.number')

for (let i=0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', inputUpdate)
}

// Add equals Functionality
let equalButton = document.querySelector("#equals")
equalButton.addEventListener('click',operatorHandler)

// Add operator function handling

let addButton = document.querySelector("#addition")
addButton.addEventListener('click',operatorHandler)


function displayCurrentInputs() {
    console.log([currentResult,workingString,operator])
}



