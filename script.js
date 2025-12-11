// create buttons
const screen = document.querySelector("#display");
const container = document.querySelector(".buttons");

//operators
const operatorsRow = document.createElement("div");
operatorsRow.classList.add('row','operations')
const operators = ["+","-","*","/"];
const operatorsNames = ['add','substract','multiply','divide']

for(let i = 0; i<operators.length; i++) {
    const button = document.createElement('button')
    button.innerText = `${operators[i]}`
    button.id = `${operatorsNames[i]}`
    button.addEventListener('click', pressButton)
    operatorsRow.appendChild(button)
}

container.insertBefore(operatorsRow, container.firstChild)

//numbers
const numbers = [[7,8,9],[4,5,6],[1,2,3]]
numbers.forEach((row) => {
    let rowNumbers = document.createElement('div');
    rowNumbers.classList.add("row")
    
    row.forEach((num) => {
        const button = document.createElement('button')
        button.innerText = `${num}`
        button.id = `number-${num}`
        button.addEventListener('click', pressButton)
        rowNumbers.appendChild(button)
    })

    container.insertBefore(rowNumbers, container.firstChild)
})

exrcise = "";

function pressButton(event) {
    const num = event.target.innerHTML;
    screen.textContent += num;
    exrcise += num;
}

function calculate() {
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

    screen.innerHTML = result;
    exrcise = ""
}

function clearScreen() {
    screen.innerHTML = "";
    exrcise = "";
}
