let startCalculationButton = document.getElementById('start');

let budgetValue = document.querySelector('.budget-value');
let dailyBudgetValue = document.querySelector('.daybudget-value');
let incomeLevelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalExpensesValue = document.querySelector('.optionalexpenses-value');
let additionalIncomeValue = document.querySelector('.income-value');
let monthlySavingsValue = document.querySelector('.monthsavings-value');
let yearlySavingsValue = document.querySelector('.yearsavings-value');


let requiredExpenses = document.querySelectorAll('.expenses-item');
let approveRequiredExpenses = document.getElementsByTagName('button')[0];
let approveOptionalExpenses = document.getElementsByTagName('button')[1];
let calculateExpenses = document.getElementsByTagName('button')[2];
let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');

let optionalIncomeInput = document.querySelector('.choose-income');
let savingsCheckbox = document.querySelector('#savings');
let sumInput = document.querySelector('.choose-sum');
let percentageInput = document.querySelector('.choose-percent');

let yearInputValue = document.querySelector('.year-value');
let monthInputValue = document.querySelector('.month-value');
let dayInputValue = document.querySelector('.day-value');