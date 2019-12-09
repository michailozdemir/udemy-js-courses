'use strict';

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: false,
};

let answerOne = prompt('Введите обязательную статью расходов в этом месяце');
let answerTwo = prompt('Во сколько это обойдется');
let answerThree = prompt('Введите обязательную статью расходов в этом месяце');
let answerFour = prompt('Во сколько это обойдется');

appData.expenses.answerOne = answerTwo;
appData.expenses.answerThree = answerFour;

alert(appData.budget/30);

