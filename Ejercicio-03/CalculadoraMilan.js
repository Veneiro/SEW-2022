//class Calculator{
    var op1 = 0;
    var op2 = 0;
    var prevOperator;
    var prevResult;
    
    function display(val) {
        if(op1 == 0){
            op1 = Number(val);
        } else if(op1 != 0 && op2 == 0){
            op2 = Number(val);
        }
        document.getElementById("result").value += val;
        
    }

    function solve(operator) {
        let x = document.getElementById("result").value;
        if(op1 == 0 && op2 == 0){
            op1 = Number(x);
        } else if(op1 != 0 && op2 == 0){
            op2 = Number(x);
            prevOperator = operator;
        }
        else if(op1 != 0 && op2 != 0){
            let y = eval(op1 + prevOperator + op2);
            document.getElementById("result").value = y;
            prevOperator = operator;
            prevResult = y;
            op1 = Number(y);
            op2 = Number(0);
        }
    }

    function solveSqrt(){
        let x = document.getElementById("result").value;
        let aux = eval(x);
        let y = Math.sqrt(aux);
        document.getElementById("result").value = y;
    }
    
    function clr() {
        document.getElementById("result").value = "";
    }
//}