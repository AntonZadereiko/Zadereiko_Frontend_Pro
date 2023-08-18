let entrance = prompt('Привіт, як Ваші справи?');
let name = prompt('Як вас звати?');
let age = prompt('Скільки вам років?');
alert('Вітаю ' + name + ' ! \nВаш вік '  + age + ' !' );



// 2 task

const number = window.prompt("Введіть 5-значне число :");
if (number.length !==5) {
    alert("Шкода, але ви ввели не 5-значне число. Спробуйте знову")
} else {
    let numbers = number.split("").join(" ");
    alert("Ваше число : " + numbers)
}
