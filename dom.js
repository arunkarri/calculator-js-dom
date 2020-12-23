// create main container

let container = createElement("div");
setAttribute(container, "class", "container");
append(container);

//create row and attach to main container

let row = createElement("div");
setAttribute(row, "class", "row");
appendChild(container, row);

// create columns under that row
let col1 = createElement("div");
setAttribute(col1, "class", "col-lg-4 col-md-12 col-sm-12 col-xs-12");
appendChild(row, col1);
let col2 = createElement("div");
setAttribute(col2, "class", "col-lg-4 col-md-12 col-sm-12 col-xs-12");
appendChild(row, col2);

let calcBody = createElement("div");
setAttribute(calcBody, "class", "calculator-body");
appendChild(col2, calcBody);

let inputRow = createElement("div");
setAttribute(inputRow, "class", "row");
appendChild(calcBody, inputRow);

let resultBox = createElement("div");
setAttribute(resultBox, "class", "col-12");
setAttribute(resultBox, 'style',"text-align: center;")
resultBox.innerHTML = 
`<button type="button" class="btn btn-primary btn-xs">
Result <span class="badge badge-light" id="result-box">0</span>
</button>`;
appendChild(inputRow, resultBox);

let textBoxCol = createElement("div");
setAttribute(textBoxCol, "class", "col-8");
textBoxCol.innerHTML = '<input type="text" name="" class="form-control input-text" id="input-box">';
appendChild(inputRow, textBoxCol);

let clearButton = createElement("div");
setAttribute(clearButton, "class", "col-2 clear-button");
clearButton.innerHTML = ' <button type="button" class="btn btn-danger btn-clear" id="clear">C</button>';
appendChild(inputRow, clearButton);

let btnGrp1 = createElement("div");
setAttribute(btnGrp1, "class", "btn-grp");
btnGrp1.innerHTML = 
`<button type="button" class="btn btn-dark btn-square" id="btn-7">7</button>
<button type="button" class="btn btn-dark btn-square" id="btn-8">8</button>
<button type="button" class="btn btn-dark btn-square" id="btn-9">9</button>
<button type="button" class="btn btn-warning btn-square" id="btn-operand" value="+">+</button>`;

appendChild(calcBody, btnGrp1);

let btnGrp2 = createElement("div");
btnGrp2.innerHTML = 
`<button type="button" class="btn btn-dark btn-square" id="btn-4">4</button>
<button type="button" class="btn btn-dark btn-square" id="btn-5">5</button>
<button type="button" class="btn btn-dark btn-square" id="btn-6">6</button>
<button type="button" class="btn btn-warning btn-square" id="btn-operand" value="-">-</button>`;

appendChild(calcBody, btnGrp2);

let btnGrp3 = createElement("div");
setAttribute(btnGrp3, "class", "btn-grp");
btnGrp3.innerHTML = 
`<button type="button" class="btn btn-dark btn-square" id="btn-1">1</button>
<button type="button" class="btn btn-dark btn-square" id="btn-2">2</button>
<button type="button" class="btn btn-dark btn-square" id="btn-3">3</button>
<button type="button" class="btn btn-warning btn-square" id="btn-operand" value="/">/</button>`;

appendChild(calcBody, btnGrp3);

let btnGrp4 = createElement("div");
setAttribute(btnGrp4, "class", "btn-grp");
btnGrp4.innerHTML = 
`<button type="button" class="btn btn-dark btn-square" id="btn-0">0</button>
<button type="button" class="btn btn-dark btn-square" id="btn-decimal">.</button>
<button type="button" class="btn btn-dark btn-square"  id="btn-equal" value="=">=</button>
<button type="button" class="btn btn-warning btn-square" id="btn-operand" value="*">*</button>`;

appendChild(calcBody, btnGrp4);


let btnGrp5 = createElement("div");
setAttribute(btnGrp5, "class", "btn-grp");
btnGrp5.innerHTML = 
`<button type="button" class="btn btn-dark btn-rect col-5" id="btn-mplus">M+</button>
<button type="button" class="btn btn-dark btn-rect col-5" id="btn-mminus">M-</button>`;

appendChild(calcBody, btnGrp5);

let col3 = createElement("div");
setAttribute(col3, "class", "col-lg-4 col-md-12 col-sm-12 col-xs-12");
appendChild(row, col3);


let inputNum = document.getElementById("input-box");
let displayVal = '';
let setResult = document.getElementById('result-box');

document.querySelector("#clear").addEventListener("click", function () {
    reset();
});

inputNum.addEventListener('keypress', function(event){
    console.log(event.keyCode);
    if(event.keyCode <47  || event.keyCode >58){
        alert('Only numbers are allowed');
        event.preventDefault();
        console.log(event);
        return false;
    }
});

function reset(){
    displayVal = '';
    inputNum.value = '';
    setResult.innerText = 0;
}
function convertResult(val){

    if(val.charCodeAt(0) >47 && val.charCodeAt(0) <57){
        displayVal = val;
        result = parseFloat(val);
    }
}

document.querySelector("#btn-1").addEventListener("click", function () {
    inputNum.value += "1";
    convertResult(inputNum.value);
});

document.querySelector("#btn-2").addEventListener("click", function () {
    inputNum.value += "2";
    convertResult(inputNum.value);
});
document.querySelector("#btn-3").addEventListener("click", function () {
    inputNum.value += "3";
    convertResult(inputNum.value);
});

document.querySelector("#btn-4").addEventListener("click", function () {
    inputNum.value += "4";
    convertResult(inputNum.value);
});

document.querySelector("#btn-5").addEventListener("click", function () {
    inputNum.value += "5";
    convertResult(inputNum.value);
});

document.querySelector("#btn-6").addEventListener("click", function () {
    inputNum.value += "6";
    convertResult(inputNum.value);
});

document.querySelector("#btn-7").addEventListener("click", function () {
    inputNum.value += "7";
    convertResult(inputNum.value);
});

document.querySelector("#btn-8").addEventListener("click", function () {
    inputNum.value += "8";
    convertResult(inputNum.value);
});

document.querySelector("#btn-9").addEventListener("click", function () {
    inputNum.value += "9";
    convertResult(inputNum.value);
});

document.querySelector("#btn-0").addEventListener("click", function () {
    inputNum.value += "0";
    convertResult(inputNum.value);
});

document.querySelector("#btn-decimal").addEventListener("click", function () {
    inputNum.value += ".";
    convertResult(inputNum.value);
});

let operandButtons = document.querySelectorAll("#btn-operand");

    operandButtons.forEach(function(ele){
        ele.addEventListener("click", function () {
            switch(ele.value) {
                case '+':
                    inputNum.value += ' + ';
                break;
                case '-':
                    inputNum.value += ' - ';
                break;
                case '/':
                    inputNum.value += ' / ';
                break;
                case '*':
                    inputNum.value += ' * ';
                break;
                default:
                // code block
            }
        });
    });

document.querySelector("#btn-equal").addEventListener("click", function () {
    let operationArray = inputNum.value.split(' ');
    console.log(operationArray);
    let sum = parseFloat(operationArray[0]);
    
    for(let i=1; i<operationArray.length; i++){
        
        switch(operationArray[i-1]) {
            case '+':
                sum = sum + parseFloat(operationArray[i]);
              break;
            case '-':
                sum = sum - parseFloat(operationArray[i]);
              break;
            case '/':
                sum = sum / parseFloat(operationArray[i]);
              break;
            case '*':
                sum = sum * parseFloat(operationArray[i]);
              break;
            default:
              // code block
          }
        

    }
    console.log(sum);
    setResult.innerText = sum;
    inputNum.value = '';
    storeinLocal(sum);
});

function storeinLocal(val){
    sessionStorage.setItem('sum', val);
}

document.querySelector("#btn-mplus").addEventListener("click", function () {
    inputNum.value += `${sessionStorage.getItem('sum')} + `;
});


document.querySelector("#btn-mminus").addEventListener("click", function () {
    inputNum.value += `${sessionStorage.getItem('sum')} - `;
});
