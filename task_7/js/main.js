'use strict';

let startCalculationButton = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dailyBudgetValue = document.querySelector('.daybudget-value'),
    incomeLevelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    additionalIncomeValue = document.querySelector('.income-value'),
    monthlySavingsValue = document.querySelector('.monthsavings-value'),
    yearlySavingsValue = document.querySelector('.yearsavings-value');

let requiredExpenses = document.querySelectorAll('.expenses-item'),
    approveRequiredExpenses = document.getElementsByTagName('button')[0],
    approveOptionalExpenses = document.getElementsByTagName('button')[1],
    calculateExpenses = document.getElementsByTagName('button')[2],
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item');

let optionalIncomeInput = document.querySelector('.choose-income'),
    savingsCheckbox = document.querySelector('#savings'),
    sumInput = document.querySelector('.choose-sum'),
    percentageInput = document.querySelector('.choose-percent');

let yearInputValue = document.querySelector('.year-value'),
    monthInputValue = document.querySelector('.month-value'),
    dayInputValue = document.querySelector('.day-value');


let money, time;

approveRequiredExpenses.disabled = true;
approveOptionalExpenses.disabled = true;
calculateExpenses.disabled = true;

startCalculationButton.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed();
    yearInputValue.value = new Date(Date.parse(time)).getFullYear();
    monthInputValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayInputValue.value = new Date(Date.parse(time)).getDate();

    approveRequiredExpenses.disabled = false;
    approveOptionalExpenses.disabled = false;
    calculateExpenses.disabled = false;
});


approveRequiredExpenses.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < requiredExpenses.length; i++) {
        let a = requiredExpenses[i].value;
        let b = requiredExpenses[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log('wrong');
            i--;
        }

    }

    expensesValue.textContent = sum;
});

approveOptionalExpenses.addEventListener('click', function () {
    for (let i = 0; i < optionalExpenses.length; i++) {
        let question = optionalExpenses[i].value;
        appData.optionalExpenses[i] = question;

        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

calculateExpenses.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dailyBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            incomeLevelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            incomeLevelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            incomeLevelValue.textContent = 'Высокий уровень достатка';
        } else {
            incomeLevelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dailyBudgetValue.textContent = 'Произошла ошибка';
    }
});

optionalIncomeInput.addEventListener('input', function() {
    let items = optionalIncomeInput.value;
    appData.income = items.split(', ');

    additionalIncomeValue.textContent = appData.income;
});

savingsCheckbox.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumInput.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumInput.value,
            percent = +percentageInput.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthlySavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearlySavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentageInput.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumInput.value,
            percent = +percentageInput.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthlySavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearlySavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};