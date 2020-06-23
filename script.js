class Calculator {
    constructor( previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        // Call the clear function to start with a clear display
        this.clear();
    }

    clear(){
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;

    }

    delete(){

    }

    appendNumber(number) {
        // Coverting the numbers to a string as JS will try to add the numbers together instead of appending ie putting onto the end
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }

    chooseOperation(operation) {

    }

    compute() {   

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;

    }
}


// Data attribute needs to be inside []
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
 
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

// Defining a new Calculator class. Function declaration?
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement); 

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})


