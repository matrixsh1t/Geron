// Задача 1
// 1) Сделать программу для оценки стоимости товаров в Ломбарде
//  ТЗ:
//  У каждого товара есть начальная стоимость N состояние - новый (полная стоимость), б/у (стоимость минус 15%) и аварийное  (стоимость минус 75%)
//  Нужно определить итоговую стоимость товара на продажу
//  Вывести итоговую стоимость товара в виде “Стоимость товара с учетом надбавки - N тенге при состоянии (состояние товара)”

type TfinalPrice = (price: number, conditionRatio: string, addedValue: number) => void
const finalPrice: TfinalPrice = ( price: number, conditionRatio: string, addedValue: number) => {
    if (conditionRatio == "new") {
        console.log(`Final price is: ${price*1+addedValue}`);
    } else if (conditionRatio == "used") {
        console.log(`Final price is: ${price*0.85+addedValue}`);  
    } else if (conditionRatio == "broken") {
        console.log(`Final price is: ${price*0.25+addedValue}`);
    }

}

console.log("---Задача 1---");

finalPrice(100,"used",0)
finalPrice(100, "new",0)
finalPrice(100, "broken",0)

// Задача 2
// 2. Сделать программу для оценки качества работы сотрудника.
//  ТЗ:
//  Сотрудник получает оценки в течение месяца и их сумма N отображается в личном кабинете
//  Нужно определить качество его работы при количестве оценок K по средней оценке и показать его оценку, а также текстовое описание
//  При оценке от 1 до 1.5 баллов должно отображаться “Плохая эффективность, необходимо пройти переквалификацию”
//  От 1.6 до 2.5 баллов отображается “Хорошая эффективность, но нужно пройти дополнительные курсы”
//  2.5 и более баллов - “Отличная эффективность”

function employeePerformance(N: number, K: number): string {
    const rating: number = N / K;
    let result: string;

    if (rating >= 1 && rating <= 1.5) {
        result = "Плохая эффективность, необходимо пройти переквалификацию";
    } else if (rating > 1.5 && rating <= 2.5) {
        result = "Хорошая эффективность, но нужно пройти дополнительные курсы";
    } else if (rating > 2.5) {
        result = "Отличная эффективность";
    } else {
        result = "Ошибка: Недопустимые оценки";
    }

    return `Средняя оценка: ${rating}
${result}`;
}

console.log("---Задача 2---");

console.log(employeePerformance(10, 10));

// Задача 3
// 3. Сделать программу по расчету итоговой зарплаты сотрудника
// Каждый сотрудник работает N часов в месяц, а также может брать дополнительные K часов для переработки, а также существует 3 вида переработки “выходные”, “праздничные”, “отпускные” часы
// ТЗ:
// При переработке выше 20 часов в “выходные” сотрудник получает +15% надбавки, в “праздничные” +20% надбавки, в “отпускные” +30% надбавка
// При переработке от 10 до 20 часов, надбавка составляет в “выходные” +10% надбавки, в “праздничные” +15% надбавки, в “отпускные” +25% надбавка
// При переработке от 1 до 10 часов : в “выходные”  +5% надбавки, в “праздничные” +10% надбавки, в “отпускные” +15% надбавка
// Программа должна отображать начальную зарплату, зарплату с учетом надбавки, а также время и тип переработки

type TSalaryCalculation = (baseSalary: number, totalHours: number, overtimeHours: number, overtimeType: string) => string;
const salaryCalculation: TSalaryCalculation = (baseSalary: number, totalHours: number, overtimeHours: number, overtimeType: string) => {
    let bonusPercentage: number = 0;
    let result: string;

    if (overtimeType === 'выходные') {
        if (overtimeHours > 20) {
            bonusPercentage = 0.15;
        } else if (overtimeHours >= 10) {
            bonusPercentage = 0.10;
        } else if (overtimeHours >= 1) {
            bonusPercentage = 0.05;
        }
    } else if (overtimeType === 'праздничные') {
        if (overtimeHours > 20) {
            bonusPercentage = 0.20;
        } else if (overtimeHours >= 10) {
            bonusPercentage = 0.15;
        } else if (overtimeHours >= 1) {
            bonusPercentage = 0.10;
        }
    } else if (overtimeType === 'отпускные') {
        if (overtimeHours > 20) {
            bonusPercentage = 0.30;
        } else if (overtimeHours >= 10) {
            bonusPercentage = 0.25;
        } else if (overtimeHours >= 1) {
            bonusPercentage = 0.15;
        }
    }

    const bonusAmount: number = baseSalary * bonusPercentage;
    const totalSalary: number = baseSalary + bonusAmount;
    
    return result = (`Начальная зарплата: ${baseSalary}
Зарплата с учетом надбавки: ${totalSalary}
Время переработки: ${overtimeHours}
Тип переработки: ${overtimeType}`);
}

console.log("---Задача 3---");

const baseSalary: number = 100;
const totalHours: number = 10;
const overtimeHours: number = 25;
const overtimeType: string = 'выходные';
console.log(salaryCalculation(baseSalary, totalHours, overtimeHours, overtimeType));

// Также можете сделать функцию "Калькулятор", 
// Можно передавать в нее два числа и знак между ними и в зависимости от знака выполнять нужную операцию

const calculator = (num1: number, num2: number, operator: string) => {
    if (num1 && num2) {
        switch (operator) {
            case "-": return num1 - num2 
                break;
            case "+": return num1 + num2
                break;
            case "*": return num1 * num2
            case "/": return num1 / num2
            default: return `Please provide ${num1}, ${num2} and the operator`
            } 
        }
        
}
console.log("---Задача 4---");
let operatorArray: string[] = ['-', '+', '*', '/'];

for (let operator in operatorArray) {
    console.log(calculator(2, 2, operatorArray[operator]));
}

