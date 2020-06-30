class Calculator {
    constructor( previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        //Flag variable
        this.readyToReset = false;
        // Call the clear function to start with a clear display
        this.clear();
    }

    clear(){
        this.previousOperand = '';
        this.currentOperand = '0';
        this.operation = '';

    }

    delete(){
        this.currentOperand = this.currentOperand.slice(0, -1);
        // Ensures 0 is shown once all numbers have been deleted
        if (this.currentOperand === ''){
            this.currentOperand = '0';
        }
        
        }

    

    appendNumber(number) {
        // Makes sure the currentOperand displays 0 but clears the 0 when a new number is inputted
        if (this.currentOperand === '0') {
        this.currentOperand = '';
        }
        // As above but returns to 0 once a calculation has been made. Could be more efficient to work on a funtion that resets the calculator.
        // NB the code below creates a bug where it will only allow you to type a single number
        //if (this.previousOperand !== '' && this.current !== '')
        //this.currentOperand = '';
        
        // If there is a '.' in the number and the currentOperand already contains a '.', end the function by returning. I.E do not append a '.'
        if (number === '.' && this.currentOperand.includes('.')) return;
        // Coverting the numbers to a string as JS will try to add the numbers together instead of appending ie putting onto the end
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        // This will compute the equation berofe applying another operation such as +, etc
        if (this.currentOperand !== ''){
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ''

    }

    compute() {
        let computation;
        // parseFloat() converts the string into a number, until it reaches a input that is not a number
        const prev = parseFloat(this.previousOperand);   
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        // Switch statement for the calculation programming
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
                case '-':
                    computation = prev - current;
                    break;
                    case 'x':
                computation = prev * current;
                break;
                case '÷':
                computation = prev / current;
                break;
                default:
                    return;
                
        }
        this.readyToReset = true;
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        // Displays text in the previous-operand div that is equal to currentOperand 
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.currentOperand === '0'){
        this.currentOperand = '';
        }
        if (this.operation != null){
        // Displays a concatenation of previous operand and the operation symbol
        this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    }
    }
}


// Data attribute needs to be inside []
//Links JS to the html elements e.g buttons, display etc and renames them as a new variable
//Const can not be reassigned 

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
        //Flag variable used to fix bug. This allows the calculator to be reset after a calculation
        if(calculator.previousOperand === "" &&
        calculator.currentOperand !== "" &&
    calculator.readyToReset) {
            calculator.currentOperand = "";
            calculator.readyToReset = false;
        }
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})




