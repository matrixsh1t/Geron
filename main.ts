
// импорт при эекспорте по умолчанию (дефолт)
import testFunciton from "./src/scripts/old/test";

testFunciton()
// обычный импорт
import { test } from "./src/scripts/old/test";

// import как объект
import * as testObj from "./src/scripts/old/test";

testObj.test
// ---------------------------------------------------
const office = {
    tech: {
        employeeCount: 10,
        jobCount: 10
    },
    design: {
        employeeCount: 10,
        jobCount: 5
    }
}


// обычный подход
let summ = office.design.employeeCount + office.design.jobCount

// преобразование в объект, вроде словаря
Object.entries(office).forEach(([keys, values]) => {
    console.log(keys);
    console.log(keys.length);
    console.log(values);
    console.log(values.jobCount);
})

// ---------------------------------------------------
console.log("--- problem 8 ---");
import { highestIncome, lowestIncome, mostHired, mostDismissedSeason } from "./src/scripts/service";

// вывод самого прибыльного сезона
console.log(highestIncome());
// вывод самого убыточного сезона
console.log(lowestIncome());
// вывод большего колечества нанятых
console.log(mostHired());
// вывести информацию в каком сезоне было больше всего увольнительных
console.log(mostDismissedSeason());

import { getEmployeeNumInEachDep, findMaxEmployeeDep, maxEmployeesInDep, maxEpxEmployeeDep } from "./src/scripts/service";
import { employees } from "./src/scripts/data";
console.log("--- par 2t---");

// вывести отдел, в котором больше всего новых сотрудников
console.log(findMaxEmployeeDep(maxEmployeesInDep))

// вывести отдел, в котором больше всего сотрудников с опытом от 3 лет
console.log(maxEpxEmployeeDep(employees));

// вывести информацию с именем и стажем сотрудников, которые уже закрыли проекты.