
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

function operate(operator,a,b) {
    return operator(a,b)
}