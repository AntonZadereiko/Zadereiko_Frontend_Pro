
const askUser = prompt(`What are u gonna do? 1) add; 2) sub; 3) mul; 4) div ;`);
const firstNumber =parseFloat( prompt (`Write the first number`));
const secondNumber = parseFloat(prompt (`Write the second number`));

let result = '';
let operatorValue = '';

if(askUser === 'add'){
    result = (firstNumber + secondNumber)
        operatorValue = ' + ';
} else if (askUser === 'sub'){
    result = (firstNumber - secondNumber)
        operatorValue = '-';
} else if (askUser === 'mul'){
    result = (firstNumber * secondNumber)
        operatorValue = '*';
} else if (askUser === 'div'){
    result = (firstNumber / secondNumber) 
        operatorValue = '/';
} else {
    alert('Invalid operator');
}

if (isNaN(firstNumber) && isNaN(secondNumber)){
    alert('Type a valid number');
} else {
    alert(` ${firstNumber}${operatorValue}${secondNumber} = ${result} `);
}

