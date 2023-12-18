var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var person = {
    age: 12,
    name: "Ilya",
};
var person1 = {
    age: 12,
    name: "Ilya",
};
var person2 = {
    age: 12,
    name: "Ilya",
    newKey: 20,
    // grades: [23,34,55]
};
person.age = 22;
console.log(" " + person.age);
var array = [1, 4343, 55, 4];
var person4 = [
    {
        age: 12,
        name: "Ilya",
    },
    {
        age: 12,
        name: "Ilya",
    },
    {
        age: 12,
        name: "Ilya",
    },
];
console.log(person4[0]);
console.log(array[array.length - 1]);
console.log("--- Practice ---");
var years = [2019, 2020, 2021, 2022, 2023, 2024];
var season = ["summer", "winter", "spring", "autumn"];
console.log(years[3]);
console.log(season[2]);
console.log(season[3]);
console.log(years[0]);
var objects = [
    {
        name: "Mark",
        age: 25,
    },
    {
        name: "Jane",
        age: 24,
    },
    {
        name: "Kate",
        age: 27,
    },
];
console.log(objects[1].age);
console.log(objects[0].name);
console.log(objects[2]);
for (var i in season) {
    console.log(i);
}
var num = 0;
while (num < 2) {
    console.log("Номер повторения " + num);
    num++; // или num +=1 или num = num +1
}
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
var array2 = array; // это ссылка
var array3 = __spreadArray([], array, true); // оператор спред, засовывает все из одной конструкции в другую
var obj = { name: "ro", age: 36 };
var obj1 = __assign(__assign({}, obj), obj);
obj1.name = "test";
var months = [
    {
        title: "jan",
        days: 23,
    },
    {
        title: "feb",
        days: 21,
    },
    {
        title: "mar",
        days: 25,
    },
    {
        title: "sep",
        days: 16,
    },
    {
        title: "dec",
        days: 55,
    },
];
// months.push({title: 'jun', days: 40}) // добавляет в конец
// months.unshift({title: 'jul', days: 58}) // добавляет в начало и возврщает новый массив
var newMonth = [];
for (var i = 0; i < months.length; i++) {
    if (months[i].days < 30) {
        newMonth.push(months[i]);
    }
}
console.log(newMonth);
var sumOfDays = 0;
for (var i in months) {
    sumOfDays += months[i].days;
}
console.log("sum of days", sumOfDays);
console.log("--- Задача 1 ---");
// поиск минимума
var tempArray = [months[0]];
for (var i in months) {
    if (months[i].days < tempArray[0].days) {
        tempArray[0] = months[i];
    }
}
console.log(tempArray[0]);
// поиск максимума
var tempArray1 = [months[0]];
for (var i in months) {
    if (months[i].days > tempArray[0].days) {
        tempArray[0] = months[i];
    }
}
console.log(tempArray[0]);
console.log("------------------------------- HW -------------------------------");
var productArray = [
    {
        title: "Bosch-30",
        category: "Холодильник",
        price: 150000,
    },
    {
        title: "Dyson 11",
        category: "Пылесос",
        price: 250000,
    },
    {
        title: "DeLonghi",
        category: "Кофе машина",
        price: 400000,
    },
];
var mostExpensive = productArray[0];
for (var i in productArray) {
    if (productArray[i].price > mostExpensive.price) {
        mostExpensive = productArray[i];
    }
}
console.log("--- Задача 2 ---");
console.log(mostExpensive);
var cheapest = productArray[0];
for (var i in productArray) {
    if (productArray[i].price < mostExpensive.price) {
        mostExpensive = productArray[i];
    }
}
console.log(cheapest);
for (var i in productArray) {
    if (productArray[i].price > 140000) {
        productArray[i].price = productArray[i].price - 20000;
    }
}
console.log(productArray);
var newProductArray = __spreadArray([], productArray, true);
console.log(newProductArray);
// Массив чисел от 10 до 80. Числа можно указывать произвольно.
console.log("--- Задача 3 ---");
var numberArray = [];
for (var i = 10; i < 81; i++) {
    numberArray.push(i);
}
// большее число
var biggestNum = numberArray[0];
for (var i in numberArray) {
    if (numberArray[i] > biggestNum) {
        biggestNum = numberArray[i];
    }
}
console.log(biggestNum);
// меньшее число
var lowestNum = numberArray[0];
for (var i in numberArray) {
    if (numberArray[i] < lowestNum) {
        lowestNum = numberArray[i];
    }
}
console.log(lowestNum);
// сумма чисел
var sumOfNum = 0;
for (var i in numberArray) {
    sumOfNum = sumOfNum + numberArray[i];
}
console.log(sumOfNum);
// создать новый массив с числами от 70
var array70to80 = [];
for (var i in numberArray) {
    if (numberArray[i] >= 70) {
        array70to80.push(numberArray[i]);
    }
}
console.log(array70to80);
// массив до 30
var array10to30 = [];
for (var i in numberArray) {
    if (numberArray[i] <= 30) {
        array10to30.push(numberArray[i]);
    }
}
console.log(array10to30);
// соединить массивы
var newArray = __spreadArray(__spreadArray([], array10to30, true), array70to80, true);
console.log(newArray);
// вывести количество элементов массива
console.log(newArray.length);
// заменить все числа от 30 до 50 на 20
for (var i in numberArray) {
    if (numberArray[i] >= 30 && numberArray[i] <= 50) {
        numberArray[i] = 20;
    }
}
console.log(numberArray);
// заменить все числа от 50 до 70 на 80
for (var i in numberArray) {
    if (numberArray[i] >= 50 && numberArray[i] <= 70) {
        numberArray[i] = 80;
    }
}
console.log(numberArray);
// сумма всех чисел
var finalSumOfNum = 0;
for (var i in numberArray) {
    finalSumOfNum = finalSumOfNum + numberArray[i];
}
console.log("\u0421\u0443\u043C\u043C\u0430 \u0447\u0438\u0441\u0435\u043B \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0433\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0430 ".concat(finalSumOfNum));
// Алгоритмические задачи
console.log('--- Алгоритмические задачи ---');
// На телеканале “Нетфоу” есть 5 самых популярных передач, которые собирают большое количество зрителей и идут разное время. 
// Вывести количество рекламы для каждой передачи, 
// с учетом что на каждые 10 000 зрителей и на 10 минут от общей продолжительности - добавляется 1 реклама 
// (условно для часовой передачи максимум 6 реклам)
console.log('--- Задача 4 ---');
var programm = [
    {
        title: 'News',
        watchers: 10000,
        duration: 20
    },
    {
        title: 'Movies',
        watchers: 200000,
        duration: 100
    },
    {
        title: 'Cartoons',
        watchers: 15000,
        duration: 30
    },
    {
        title: 'Travel',
        watchers: 30000,
        duration: 10
    },
    {
        title: 'Cooking',
        watchers: 4000,
        duration: 50
    },
];
var numberOfAds = 0;
for (var i in programm) {
    numberOfAds = Math.floor(programm[i].watchers / 10000);
    console.log("Programm ".concat(programm[i].title));
    if (numberOfAds > programm[i].duration / 10) {
        console.log("Number of ads: ".concat(programm[i].duration / 10));
    }
    else {
        console.log("Number of ads: ".concat(numberOfAds));
    }
}
// В рамках научной выставки, чтоб дойти до финала необходимо пройти 4 этапа: 
// Отбор, Конкурс, Дуэль и Гранд. 
// После прохождения каждого этапа команде начисляется 2000 баллов. 
// На каждом этапе команда зарабатывает еще определенное количество баллов.
// Для прохождения Отбора - 5000 баллов, для Конкурса - 10000, для Дуэли - 15000, для Гранда - 20000.
// Выводить количество баллов на каждом этапе и статус прохождения команды. 
var stage;
(function (stage) {
    stage["CHOOSING"] = "Choosing";
    stage["CONTEST"] = "Contest";
    stage["DUEL"] = "Duel";
    stage["GRANT"] = "Grant";
})(stage || (stage = {}));
var randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var expo = function () {
    var earnedPoints = 0;
    console.log(stage.CHOOSING);
    earnedPoints = 2000 + randomInt(1000, 5000);
    console.log(earnedPoints);
    if (earnedPoints > 5000) {
        console.log(stage.CONTEST);
        earnedPoints = 2000 + randomInt(1000, 5000);
        console.log(earnedPoints);
        if (earnedPoints > 10000) {
            console.log(stage.DUEL);
            earnedPoints = 2000 + randomInt(1000, 5000);
            console.log(earnedPoints);
            if (earnedPoints > 15000) {
                console.log(stage.DUEL);
                earnedPoints = 2000 + randomInt(1000, 5000);
                console.log(earnedPoints);
                if (earnedPoints > 20000) {
                    console.log(stage.GRANT);
                    console.log(earnedPoints);
                    console.log('Yor won a grant');
                }
            }
        }
    }
};
console.log('--- Задача 5 ---');
expo();
// В зоопарк привезли 3 животных. 
// Рассчитать количество корма для каждого животного на год, с учетом что на 100 кг в день необходимо 4 кг корма. 
// Вывести расчет корма на год для каждого животного.
console.log('--- Задача 6 ---');
var animalArray = [
    {
        name: "Elephant",
        weight: 100
    },
    {
        name: "Rabbit",
        weight: 4
    },
    {
        name: "Deer",
        weight: 60
    },
];
var food = 0;
for (var i in animalArray) {
    food = Math.ceil(animalArray[i].weight / 4) * 365;
    console.log("".concat(animalArray[i].name, " needs ").concat(food, " kg of food"));
}
