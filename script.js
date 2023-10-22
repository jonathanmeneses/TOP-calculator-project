
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
    if (operator === '') {
        currentResult = Number(workingString)
    }
    else {
        currentResult = operator(Number(currentResult),Number(workingString))
    }
    
    workingString = ''
    resultDisplay.innerHTML = currentResult
    operator =''

}


// Creating Elements

// Define initial variables

let currentResult = 0;
let workingString ='0';
let operator = ''
let resultDisplay = document.querySelector("#result-text")

function inputUpdate(event) {
    console.log(`clicked ${event.target.id}`)
    workingString = Number(workingString + event.target.id)
    resultDisplay.innerHTML = workingString

}


// Add Event Listeners to update workingString for each number selected
let numberButtons = document.querySelectorAll('.number')

for (let i=0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', inputUpdate)
}

// Add equals Functionality
// If no operator previously selected just show the working operator


let equalButton = document.querySelector("#equals")
equalButton.addEventListener('click',operate)




