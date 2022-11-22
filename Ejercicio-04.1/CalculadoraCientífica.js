class Calculator {
    constructor(operators, displayValue, operatorElements, keyPressedNumbersAllowed, keyPressedOperatorsAllowed) {
        this.operators = operators;
        this.displayValue = '';
        this.operatorElements = operatorElements;
        this.keyPressedNumbersAllowed = keyPressedNumbersAllowed;
        this.keyPressedOperatorsAllowed = keyPressedOperatorsAllowed;
        this.waitingForOperator = false;
        this.value = null;
        this.operator = null;
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
                if(keyName == 'Enter' || keyName == '='){
                    this.solve();
                } else{
                    this.setNum(keyName);
                }
            }
        
            // Backspace to reset value and display value
            if(keyName == 'Backspace') {
                this.resetDisplayValue();
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

        this.displayValue = '0';
        this.value = null;

        this.resetActiveOperatorStatus();
        
        this.setDisplayNumber(this.displayValue);

    };
    // calculate percent of display value
    setPercent() {

        if(this.displayValue != '0') {

            this.displayValue = eval(this.displayValue) / 100;
        
            this.setDisplayNumber(this.displayValue);

        }

    };

    doLog(){
        if(this.displayValue != '0') {

            this.displayValue = Math.log(eval(this.displayValue));
        
            this.setDisplayNumber(this.displayValue);

        }
    }

    doSin(){
        if(this.displayValue != '0') {

            this.displayValue = Math.sin(eval(this.displayValue));
        
            this.setDisplayNumber(this.displayValue);

        }
    }

    doCos(){
        if(this.displayValue != '0') {

            this.displayValue = Math.cos(eval(this.displayValue));
        
            this.setDisplayNumber(this.displayValue);

        }
    }

    doTan(){
        if(this.displayValue != '0') {

            this.displayValue = Math.tan(eval(this.displayValue));
        
            this.setDisplayNumber(this.displayValue);

        }
    }

    doSqrt(){
        if(this.displayValue != '0') {

            this.displayValue = Math.sqrt(eval(this.displayValue));
        
            this.setDisplayNumber(this.displayValue);

        }
    }

    doToSquare(){
        if(this.displayValue != '0') {

            this.displayValue = Math.pow(eval(this.displayValue), 2);
        
            this.setDisplayNumber(this.displayValue);

        }
    }

    doTenToX(){
        if(this.displayValue != '0') {

            this.displayValue = Math.pow(10, eval(this.displayValue));
        
            this.setDisplayNumber(this.displayValue);

        }
    }

    doFactorial(){
        if(this.displayValue != '0') {
            this.displayValue = eval(this.displayValue);
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

        if(this.displayValue != '0') {

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

        document.getElementById('displayValue').value = String(newDisplayValue);

    }

    solve(){
        if(this.displayValue != '0') {
            this.displayValue = eval(this.displayValue);
            this.setDisplayNumber(this.displayValue);
        }
    }
}

// possible operators
const operators = {
    '/': (prevValue, nextValue) => prevValue / nextValue,
    '*': (prevValue, nextValue) => prevValue * nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue,
    '+': (prevValue, nextValue) => prevValue + nextValue,
    '=': (prevValue, nextValue) => nextValue,
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
const keyPressedOperatorsAllowed = ['/', '*', '-', '+', 'Enter'];

const calculator = new Calculator(operators, displayValue, operatorElements, keyPressedNumbersAllowed, keyPressedOperatorsAllowed);

// Keyup Event listeners
document.addEventListener('keyup', (event) => {
    calculator.onKeyUp(event);
});
