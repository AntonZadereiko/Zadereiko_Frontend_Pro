// 1 Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function calcAverage(arr) {
    const numElements = arr.filter(item => typeof item === 'number');

    if (numElements.length === 0) {
        return 0;
    }
    const sum = numElements.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const averageNum = sum / numElements.length;

    return averageNum;
}
const arr = [4, 'Ukraine', 12, 'football', 8];
const averageNum = calcAverage(arr);
console.log('Середнє арифметичне числових елементів:', averageNum);

// 2 Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

const x = prompt("Введіть перше число:");
const znak = prompt("Введіть операцію (+, -, *, /, % або ^):");
const y = prompt("Введіть друге число:");

doMath(x, znak, y);
function doMath (x, znak, y) {
    x = parseFloat(x);
    y = parseFloat(y);
  if (isNaN(x) || isNaN(y)) {
      console.log('Введіть коректні числа');
      return;
  }
  let result = 0;
  switch (znak){
      case '+' :
          result = x + y;
          break;
      case '-':
          result = x - y;
          break;
      case '*':
          result = x * y;
          break;
      case '/':
          if (y === 0) {
              console.log("Ділити на нуль не можна.");
              return;
          }
          result = x / y;
          break;
      case '%':
          result = x % y;
          break;
      case '^':
          result = Math.pow(x, y);
          break;
      default:
          console.log("Невідомий оператор. Введіть + , - , * , / , % або ^.");
          return;
  }
    console.log(`Результат ${x} ${znak} ${y} = ${result}`);
}

// 3 Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function fillArray () {
    const numRows = parseInt(prompt('Введіть кількість рядків:'));
    const numCols = parseInt(prompt('Введіть кількість стовпців:'));
    const arr = [];
    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numCols; j++) {
            const value = parseInt(prompt(`Введіть значення для елемента (${i}, ${j}):`));
            row.push(value);
        }
        arr.push(row);
    }

    // Повертаємо заповнений двомірний масив
    return arr;
}
const filledArray = fillArray();

// Виводимо заповнений масив в консоль
console.log('Заповнений масив:', filledArray);

// 4 Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function deleteRow(inputString, charsToRemove) {
    const removeSymbols = new RegExp(`[${charsToRemove.join('')}]`, 'g');
    const result = inputString.replace(removeSymbols, '');

    return result;
}

const inputString = prompt('Введіть рядок:');
const charsToRemove = prompt('Введіть символи для видалення (без пробілів, наприклад, ld):').split('');

const result = deleteRow(inputString, charsToRemove);
console.log('Результат:', result);
