let money, time; // Создаём переменные на глобальном уровне
function start() {
    money = +prompt("Ваш бюджет на месяц", "");     // Приводим значение string к number
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц", "");
    }      // Проверяем коректность ввода данных, если данные некоректны, то просим ввести пользователя ещё раз.
}
start()
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    start: function () {
        money = +prompt("Ваш бюджет на месяц", "");     // Приводим значение string к number
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
        while (isNaN(money) || money == '' || money == null) {
            money = +prompt("Ваш бюджет на месяц", "");
        }      // Проверяем коректность ввода данных, если данные некоректны, то просим ввести пользователя ещё раз.
    },
    chooseExpenses: function () {      // Функция для расчёта затрат 
        for (let i = 0; i < 2; i++) {
            question1 = prompt("Введите обязательную статью расходов в этом месяце", "");
            question2 = prompt("Во сколько обойдется?", "");
            if (typeof (question1) === 'string' && question1 != null && question2 != null && question1 != '' && question2 != '' && question1.length < 50) {
                appData.expenses[question1] = question2; // проверяем на коректность ввода данных 
            }
            else {
                i -= 1;     // если условие не выполнилось отнимаем единицу от счетчика и повторяем цикл ещё раз 
            }
        };
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = prompt("Какова сумма накоплений?", "");
            let percent = prompt("Под какой процент?", "");
            appData.monthIncome = save / 100 / 12 * percent;
        }
        alert("Ваш ежемесячный доход с депозита: " + appData.monthIncome);
    },    // Функция, которая будет считать доход в месяц с накоплений
    detectLevel: function () {
        if (appData.moneyPerDay < 150) {
            console.log("Низкий уровень достатка");
        }
        else if (appData.moneyPerDay > 150 && appData.moneyPerDay < 1500) {
            console.log("Средний уровень достатка");
        }
        else if (appData.moneyPerDay > 1500) {
            console.log("Высокий уровень достатка");
        }
        else {
            console.log("Произошла ошибка!");
        }
        // Проверяем уровень достатка используя условие If и логический оператор &&(и)
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();       // высчитываем ежедневный бюджет и записываем его в свойство moneyPerDay у объекта appData
        alert("Ваш ежедневный бюджет: " + appData.moneyPerDay);      //выводим ежедневный бюджет пользователю
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", '')
            appData.optionalExpenses[i] = opt;
        } // Записываем необязательные расходы в объект optionalExpenses
    },
    chooseIncome: function () {
        let items = prompt("Что принесёт дополнительный доход ?", '');
        appData.income = items.split(', ');   // разибите строки в массив
        appData.income.push(prompt("Может что-то ещё", ''));
        appData.income.sort();
    }    // Функция, которая передаёт в массив income информацию о том что приносит дополнительный доход
}



