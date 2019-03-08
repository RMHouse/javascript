'use strict';

let money = prompt("Ваш бюджет на месяц?", 0);
let time = prompt("Введите дату в формате YYYY-MM-DD",0);
let dayBudget = money/30;

let appData = {
    budget:money,
    timeData: time,
    optionalExpenses: {},
    income : {},
    expenses: {},
    savings : false

};

alert(dayBudget);