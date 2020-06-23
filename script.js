class Calculator {
    constructor( previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        // Call the clear function to start with a clear display
        this.clear()
    }

    clear(){
        this.previousOperandText = '';
        this.currentOperandText = '';
        this.operation = undefined;

    }

    delete(){

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

    }
}


// Data attribute needs to be inside []
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelectorAll('[data-delete]');
const equalsButton = document.querySelectorAll('[data-equals]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
 
const previousOperandText = document.querySelectorAll('[data-previous-operand]');
const currentOperandText = document.querySelectorAll('[data-current-operand]');

const calculator = new Calculator(previousOperandText, currentOperandText);


