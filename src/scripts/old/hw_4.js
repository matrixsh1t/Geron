// Задача 1
// 1) Сделать программу для оценки стоимости товаров в Ломбарде
//  ТЗ:
//  У каждого товара есть начальная стоимость N состояние - новый (полная стоимость), б/у (стоимость минус 15%) и аварийное  (стоимость минус 75%)
//  Нужно определить итоговую стоимость товара на продажу
//  Вывести итоговую стоимость товара в виде “Стоимость товара с учетом надбавки - N тенге при состоянии (состояние товара)”
var finalPrice = function (price, conditionRatio, addedValue) {
    if (conditionRatio == "new") {
        console.log("Final price is: ".concat(price * 1 + addedValue));
    }
    else if (conditionRatio == "used") {
        console.log("Final price is: ".concat(price * 0.85 + addedValue));
    }
    else if (conditionRatio == "broken") {
        console.log("Final price is: ".concat(price * 0.25 + addedValue));
    }
};
console.log("---Задача 1---");
finalPrice(100, "used", 0);
finalPrice(100, "new", 0);
finalPrice(100, "broken", 0);
// Задача 2
// 2. Сделать программу для оценки качества работы сотрудника.
//  ТЗ:
//  Сотрудник получает оценки в течение месяца и их сумма N отображается в личном кабинете
//  Нужно определить качество его работы при количестве оценок K по средней оценке и показать его оценку, а также текстовое описание
//  При оценке от 1 до 1.5 баллов должно отображаться “Плохая эффективность, необходимо пройти переквалификацию”
//  От 1.6 до 2.5 баллов отображается “Хорошая эффективность, но нужно пройти дополнительные курсы”
//  2.5 и более баллов - “Отличная эффективность”
function employeePerformance(N, K) {
    var rating = N / K;
    var result;
    if (rating >= 1 && rating <= 1.5) {
        result = "Плохая эффективность, необходимо пройти переквалификацию";
    }
    else if (rating > 1.5 && rating <= 2.5) {
        result = "Хорошая эффективность, но нужно пройти дополнительные курсы";
    }
    else if (rating > 2.5) {
        result = "Отличная эффективность";
    }
    else {
        result = "Ошибка: Недопустимые оценки";
    }
    return "\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u043E\u0446\u0435\u043D\u043A\u0430: ".concat(rating, "\n").concat(result);
}
console.log("---Задача 2---");
console.log(employeePerformance(10, 10));
var salaryCalculation = function (baseSalary, totalHours, overtimeHours, overtimeType) {
    var bonusPercentage = 0;
    var result;
    if (overtimeType === 'выходные') {
        if (overtimeHours > 20) {
            bonusPercentage = 0.15;
        }
        else if (overtimeHours >= 10) {
            bonusPercentage = 0.10;
        }
        else if (overtimeHours >= 1) {
            bonusPercentage = 0.05;
        }
    }
    else if (overtimeType === 'праздничные') {
        if (overtimeHours > 20) {
            bonusPercentage = 0.20;
        }
        else if (overtimeHours >= 10) {
            bonusPercentage = 0.15;
        }
        else if (overtimeHours >= 1) {
            bonusPercentage = 0.10;
        }
    }
    else if (overtimeType === 'отпускные') {
        if (overtimeHours > 20) {
            bonusPercentage = 0.30;
        }
        else if (overtimeHours >= 10) {
            bonusPercentage = 0.25;
        }
        else if (overtimeHours >= 1) {
            bonusPercentage = 0.15;
        }
    }
    var bonusAmount = baseSalary * bonusPercentage;
    var totalSalary = baseSalary + bonusAmount;
    return result = ("\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430: ".concat(baseSalary, "\n\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u043D\u0430\u0434\u0431\u0430\u0432\u043A\u0438: ").concat(totalSalary, "\n\u0412\u0440\u0435\u043C\u044F \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0438: ").concat(overtimeHours, "\n\u0422\u0438\u043F \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0438: ").concat(overtimeType));
};
console.log("---Задача 3---");
var baseSalary = 100;
var totalHours = 10;
var overtimeHours = 25;
var overtimeType = 'выходные';
console.log(salaryCalculation(baseSalary, totalHours, overtimeHours, overtimeType));
// Также можете сделать функцию "Калькулятор", 
// Можно передавать в нее два числа и знак между ними и в зависимости от знака выполнять нужную операцию
var calculator = function (num1, num2, operator) {
    if (num1 && num2) {
        switch (operator) {
            case "-":
                return num1 - num2;
                break;
            case "+":
                return num1 + num2;
                break;
            case "*": return num1 * num2;
            case "/": return num1 / num2;
            default: return "Please provide ".concat(num1, ", ").concat(num2, " and the operator");
        }
    }
};
console.log("---Задача 4---");
var operatorArray = ['-', '+', '*', '/'];
for (var operator in operatorArray) {
    console.log(calculator(2, 2, operatorArray[operator]));
}
