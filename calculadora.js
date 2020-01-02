const input = document.querySelector('.calculator');//selects the calculator contaienr
const result = document.querySelector('.result'); // selects the result cell
let storedNumber;
let finalResult;
let equalsMoreThanOneTime = false;
let operation; //operation: 1: plus, 2: substract, 3: multiply, 4: divide
//this listens to which button was pressed, then sets at the result cell that number
         input.addEventListener('click', function(event){
         buttonPressed = event.target.innerText;
                if(buttonPressed === "C"){
                    clear();
                    operation = 0;
                }
                //if it's a number
                if(buttonPressed >= 0 && buttonPressed < 10){
                    setNumber();
                }
                //if it's an operation
                if(buttonPressed === '+'){
                    setOperation('1');
                }
                if(buttonPressed === '-'){
                    setOperation('2');
                }
                if(buttonPressed === 'X'){
                    setOperation('3');
                }
                if(buttonPressed === '÷'){
                    setOperation('4');
                }
                if(buttonPressed === '='){
                    if(operation === '1'){
                        plus();
                    }
                    if(operation === '2'){
                        substract();
                    }
                    if(operation === '3'){
                        multiply();
                    }
                    if(operation === '4'){
                        divide();
                    }
                    showResult()
                }
                if(buttonPressed === '←'){
                        backspace()
                        operation = 0;;
                }
                
        })

function clear(){
    result.innerText = 0;
    operation = 0;
    equalsMoreThanOneTime = false;
}

function setNumber(){
    //this is for aovid stacking '0's and having numbers like '04444' with the '0' at the beginning
    if (result.innerText == 0){ 
        result.innerText = buttonPressed;   
    } else{
    result.innerText += buttonPressed;
  }
}

//tells the program to store de previous number in a new variable, then sets the operation to the number it should take and puts result number to 0 again
function setOperation(oper){
    storedNumber = result.innerText;
    result.innerText = 0;
    operation = oper;
}

//it will show result only if there was an operation before
function showResult(){
    if (operation != 0){
        finalResult = +parseFloat(finalResult).toFixed(3); //limits the number of decimals to 3
        //Its needed so "=" can be pressed to repeat the last operation. Actually it works only with "+"
        if (equalsMoreThanOneTime === false){
        storedNumber = result.innerText;
        equalsMoreThanOneTime = true;
        result.innerText = finalResult;
        } else {    
    result.innerText = finalResult;
    }
}
}
//erases the last character, if erases the only one, it puts 0 in result
function backspace(){
    let length = result.innerText.length;
    result.innerText = result.innerText.substr(0, length-1);
    if (length === 1){
        result.innerText = 0;
    }
}
//parseInt converts every number to Integer
function plus(){
    finalResult = parseInt(storedNumber) + parseInt(result.innerText); 
}

function substract(){
    finalResult = parseInt(storedNumber) - parseInt(result.innerText); 
}

function multiply(){
    finalResult = parseInt(storedNumber) * parseInt(result.innerText); 
}

function divide(){
    finalResult = parseInt(storedNumber) / parseInt(result.innerText); 
}