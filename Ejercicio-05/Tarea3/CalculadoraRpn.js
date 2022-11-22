class Calculator {
    constructor(operators, displayValue, operatorElements, keyPressedNumbersAllowed, keyPressedOperatorsAllowed) {
        this.operators = operators;
        this.displayValue = "";
        this.operatorElements = operatorElements;
        this.keyPressedNumbersAllowed = keyPressedNumbersAllowed;
        this.keyPressedOperatorsAllowed = keyPressedOperatorsAllowed;
        this.waitingForOperator = false;
        this.value = null;
        this.operator = null;
        this.stack = new Array();
    };
    // on key up
    onKeyUp(event) {
        let keyName = event.key;
        
            // Numbers 0-9
            if(keyPressedNumbersAllowed.includes(keyName)) {
                this.setNum(keyName);
            }
        
            // Operators /, *, -, +, =
            if(keyPressedOperatorsAllowed.includes(keyName)) {
                switch(keyName){
                    case 'Enter' || '=':
                        this.addToStack();
                        break;
                    case '+':
                        this.sum();
                        break;
                    case '-':
                        this.calculateMinus();
                        break;
                    case '*':
                        this.calculateMul();
                        break;
                    case '/':
                        this.calculateDivision();
                        break;
                }
            }
        
            // Backspace to reset value and display value
            if(keyName == 'Backspace') {
                this.resetDisplayValue();
            }

            if(keyName == 'Delete') {
                this.resetDisplayAndStack();
            }
        
            // Dot 
            if(keyName == ',' || keyName == '.') {
                this.setDot();
            }
    };
    // set sum to display
    setNum(clickedValue) {
        if(this.waitingForOperator) {
            this.displayValue = clickedValue;
                
            this.waitingForOperator = false;
            
            this.resetActiveOperatorStatus();
            
        } else {
    
            this.displayValue === '0' ? this.displayValue = clickedValue : this.displayValue = this.displayValue + clickedValue;
            
         }
                
        this.setDisplayNumber(this.displayValue);
    };
    // set dot to display
    setDot() {
        const clickedValue = '.';

        if(!this.displayValue.includes(clickedValue)) {

            this.displayValue = String(this.displayValue) + clickedValue;
            
            this.setDisplayNumber(this.displayValue);

        }      

    };
    // reset value and display value
    resetDisplayValue() {

        this.displayValue = '';
        this.value = null;

        this.resetActiveOperatorStatus();
        
        this.setDisplayNumber(this.displayValue);

    };
    resetDisplayAndStack(){
        this.displayValue = '';
        this.value = null;

        this.resetActiveOperatorStatus();
        
        this.stack = [];
        document.getElementsByName('stack')[0].value = '';
        this.setDisplayNumber(this.displayValue);
    };
    // calculate percent of display value
    setPercent() {

        if(this.stack.length >= 1){
            var op1 = this.stack.pop();
            this.stack.push(eval(op1/100));
            document.getElementsByName("stack")[0].value = '';
            for(let index = 0; index < this.stack.length; index++){
                document.getElementsByName("stack")[0].value += (this.stack[index] + "\n");
            }
        } 

    };

    doLog(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop();
            this.stack.push(Math.log(op1));
            document.getElementsByName("stack")[0].value = '';
            for(let index = 0; index < this.stack.length; index++){
                document.getElementsByName("stack")[0].value += (this.stack[index] + "\n");
            }
        } 
    }

    doSin(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop();
            this.stack.push(Math.sin(op1));
            document.getElementsByName("stack")[0].value = '';
            for(let index = 0; index < this.stack.length; index++){
                document.getElementsByName("stack")[0].value += (this.stack[index] + "\n");
            }
        } 
    }

    doCos(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop();
            this.stack.push(Math.cos(op1));
            document.getElementsByName("stack")[0].value = '';
            for(let index = 0; index < this.stack.length; index++){
                document.getElementsByName("stack")[0].value += (this.stack[index] + "\n");
            }
        } 
    }

    doTan(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop();
            this.stack.push(Math.sqrt(op1));
            document.getElementsByName("stack")[0].value = '';
            for(let index = 0; index < this.stack.length; index++){
                document.getElementsByName("stack")[0].value += (this.stack[index] + "\n");
            }
        } 
    }

    doSqrt(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop();
            this.stack.push(Math.sqrt(op1));
            document.getElementsByName("stack")[0].value = '';
            for(let index = 0; index < this.stack.length; index++){
                document.getElementsByName("stack")[0].value += (this.stack[index] + "\n");
            }
        } 
    }

    doToSquare(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop();
            this.stack.push(Math.pow(op1, 2));
            document.getElementsByName("stack")[0].value = '';
            for(let index = 0; index < this.stack.length; index++){
                document.getElementsByName("stack")[0].value += (this.stack[index] + "\n");
            }
        } 
    }

    doTenToX(){
        if(this.displayValue != '') {

            this.displayValue = Math.pow(10, parseFloat(this.displayValue));
        
            this.setDisplayNumber(this.displayValue);

        }
    }

    doFactorial(){
        if(this.displayValue != '') {
            this.displayValue = parseFloat(this.displayValue);
            var i,fact=1;  
            var number=this.displayValue;//It is the number to calculate factorial    
            for(i=1;i<=number;i++){    
                fact=fact*i;    
            }            
            this.setDisplayNumber(fact);
        }
    }

    // toggle plus/minus sign
    togglePlusMinus() {

        if(this.displayValue != '') {

            this.displayValue = String(this.displayValue).charAt(0) === '-' ? String(this.displayValue).substr(1) : '-' + String(this.displayValue);
        
            this.setDisplayNumber(this.displayValue);

        }

    };
    // delete active class from operator
    resetActiveOperatorStatus() {

        for (var i = 0; i < this.operatorElements.length; i++) {

            this.operatorElements[i].classList.remove('active');

        }

    };
    // set display number
    setDisplayNumber(newDisplayValue) {
        document.getElementsByName('displayValue')[0].value = String(newDisplayValue);
    }

    resetOnlyDisplayValue() {

        this.displayValue = '';
        this.value = null;        
        this.setDisplayNumber(this.displayValue);

    };

    addToStack(){
        if(this.displayValue != '') {
            var number = parseFloat(this.displayValue);
            this.stack.push(number);
            document.getElementsByName("stack")[0].value += (number + "\n");
            this.resetOnlyDisplayValue();
        }
    }

    sum(){
        if(this.stack.length > 1){
            var op1 = this.stack.pop();
            var op2 = this.stack.pop();
            this.stack.push(eval(op1 + op2));
            document.getElementsByName("stack")[0].value = '';
            for(let index = 0; index < this.stack.length; index++){
                document.getElementsByName("stack")[0].value += (this.stack[index] + "\n");
            }
        } 
    }

    calculateMul(){
        if(this.stack.length > 1){
            var op1 = this.stack.pop();
            var op2 = this.stack.pop();
            this.stack.push(op1 * op2);
            document.getElementsByName("stack")[0].value = '';
            for(let index = 0; index < this.stack.length; index++){
                document.getElementsByName("stack")[0].value += (this.stack[index] + "\n");
            }
        } 
    }

    calculateMinus(){
        if(this.stack.length > 1){
            var op1 = this.stack.pop();
            var op2 = this.stack.pop();
            this.stack.push(op1 - op2);
            document.getElementsByName("stack")[0].value = '';
            for(let index = 0; index < this.stack.length; index++){
                document.getElementsByName("stack")[0].value += (this.stack[index] + "\n");
            }
        } 
    }
    calculateDivision(){
        if(this.stack.length > 1){
            var op1 = this.stack.pop();
            var op2 = this.stack.pop();
            this.stack.push(op1 / op2);
            document.getElementsByName("stack")[0].value = '';
            for(let index = 0; index < this.stack.length; index++){
                document.getElementsByName("stack")[0].value += (this.stack[index] + "\n");
            }
        } 
    }

    doPow(){
        if(this.stack.length > 1){
            var op1 = this.stack.pop();
            var op2 = this.stack.pop();
            this.stack.push(Math.pow(op1,op2));
            document.getElementsByName("stack")[0].value = '';
            for(let index = 0; index < this.stack.length; index++){
                document.getElementsByName("stack")[0].value += (this.stack[index] + "\n");
            }
        } 
    }

    doModule(){
        if(this.stack.length > 1){
            var op1 = this.stack.pop();
            var op2 = this.stack.pop();
            this.stack.push(eval(op1%op2));
            document.getElementsByName("stack")[0].value = '';
            for(let index = 0; index < this.stack.length; index++){
                document.getElementsByName("stack")[0].value += (this.stack[index] + "\n");
            }
        } 
    }
}

// possible operators
const operators = {
    '/': (prevValue, nextValue) => prevValue / nextValue,
    '*': (prevValue, nextValue) => prevValue * nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue,
    '+': (prevValue, nextValue) => prevValue + nextValue,
    'ENTER': (prevValue) => addToStack(prevValue),
    '%': (prevValue, nextValue) => prevValue % nextValue,
    '^':(prevValue, nextValue) => Math.pow(prevValue, nextValue),
    'exp':(prevValue, nextValue) => {
        for (let index = 0; index < nextValue; index++) {
            prevValue = prevValue * 10;
        }
        return prevValue;
    },
};
// where the value should be displayed
const displayValue = document.getElementsByName('displayValue').value;
// get all elements with class operator
const operatorElements = document.getElementsByName('btn operator');
// Allowed keypress numbers
const keyPressedNumbersAllowed = ['0','1','2','3','4','5','6','7','8','9'];
const keyPressedOperatorsAllowed = ['/', '*', '-', '+', 'Enter', 'Delete'];

const calculator = new Calculator(operators, displayValue, operatorElements, keyPressedNumbersAllowed, keyPressedOperatorsAllowed);

// Keyup Event listeners
document.addEventListener('keyup', (event) => {
    calculator.onKeyUp(event);
});
