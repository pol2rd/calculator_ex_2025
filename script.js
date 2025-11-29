
exrcise = "";

function pressButton(event) {
    const screen = document.querySelector(".display");
    const num = event.target.innerHTML;
    screen.textContent += num;
    exrcise += num;
}

function calculate() {
    const operators = ["+","-","/","*"];
    const operator = operators.find(op => exrcise.indexOf(op) > -1);
    const firstNum = parseInt(exrcise.substring(0,exrcise.indexOf(operator)));
    const secondNum = parseInt(exrcise.substring(exrcise.indexOf(operator) + 1));
    let result;

    switch(operator){
        case "+":
            result = firstNum + secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;
    }

    const screen = document.querySelector(".display");
    screen.innerHTML = result;
    exrcise = ""
}

function clearScreen() {
    const screen = document.querySelector(".display");
    screen.innerHTML = "&nbsp;";
    exrcise = "";
}

