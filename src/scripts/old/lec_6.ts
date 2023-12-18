type TNumOrStr = number | string;

type TPerson = {
  age: number;
  name: string;
  id?: TNumOrStr;
};

let person: TPerson = {
  age: 12,
  name: "Ilya",
};

interface IPerson {
  age: number;
  name: string;
  id?: number | string;
}

let person1: IPerson = {
  age: 12,
  name: "Ilya",
};

type TPerson2 = TPerson & {
  age: number;
  name: string;
  id?: TNumOrStr;
};

interface IPerson2 extends IPerson {
  newKey: number;
  grades?: number;
}

let person2: IPerson2 = {
  age: 12,
  name: "Ilya",
  newKey: 20,
  // grades: [23,34,55]
};

person.age = 22;
console.log(" " + person.age);

let array: number[] = [1, 4343, 55, 4];
let person4: TPerson[] = [
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

let years: number[] = [2019, 2020, 2021, 2022, 2023, 2024];
let season: string[] = ["summer", "winter", "spring", "autumn"];

console.log(years[3]);
console.log(season[2]);
console.log(season[3]);
console.log(years[0]);

type TObject = {
  name: string;
  age: number;
};

let objects: TObject[] = [
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

for (let i in season) {
  console.log(i);
}

let num = 0;
while (num < 2) {
  console.log("Номер повторения " + num);
  num++; // или num +=1 или num = num +1
}

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let array2: number[] = array; // это ссылка

let array3: number[] = [...array]; // оператор спред, засовывает все из одной конструкции в другую

let obj = { name: "ro", age: 36 };
let obj1 = { ...obj, ...obj };
obj1.name = "test";

type TMonth = {
  title: string;
  days: number;
};

let months: TMonth[] = [
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

let newMonth = [];
for (let i = 0; i < months.length; i++) {
  if (months[i].days < 30) {
    newMonth.push(months[i]);
  }
}

console.log(newMonth);

let sumOfDays: number = 0;
for (let i in months) {
  sumOfDays += months[i].days;
}

console.log("sum of days", sumOfDays);

console.log("--- Задача 1 ---");
// поиск минимума
let tempArray: TMonth[] = [months[0]];

for (let i in months) {
  if (months[i].days < tempArray[0].days) {
    tempArray[0] = months[i];
  }
}
console.log(tempArray[0]);
// поиск максимума
let tempArray1: TMonth[] = [months[0]];

for (let i in months) {
  if (months[i].days > tempArray[0].days) {
    tempArray[0] = months[i];
  }
}

console.log(tempArray[0]);
console.log(
  "------------------------------- HW -------------------------------"
);
//  Массив (3 объекта товаров)

type TProduct = {
  title: string;
  category: string;
  price: number;
};

let productArray: TProduct[] = [
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

let mostExpensive: TProduct = productArray[0];

for (let i in productArray) {
  if (productArray[i].price > mostExpensive.price) {
    mostExpensive = productArray[i];
  }
}

console.log("--- Задача 2 ---");
console.log(mostExpensive);

let cheapest: TProduct = productArray[0];

for (let i in productArray) {
  if (productArray[i].price < mostExpensive.price) {
    mostExpensive = productArray[i];
  }
}

console.log(cheapest);

for (let i in productArray) {
  if (productArray[i].price > 140000) {
    productArray[i].price = productArray[i].price - 20000;
  }
}

console.log(productArray);

let newProductArray: TProduct[] = [...productArray];

console.log(newProductArray);

// Массив чисел от 10 до 80. Числа можно указывать произвольно.
console.log("--- Задача 3 ---");

let numberArray: number[] = [];

for (let i: number = 10; i < 81; i++) {
  numberArray.push(i);
}

// большее число
let biggestNum: number = numberArray[0];

for (let i in numberArray) {
  if (numberArray[i] > biggestNum) {
    biggestNum = numberArray[i];
  }
}
console.log(biggestNum);

// меньшее число
let lowestNum: number = numberArray[0];

for (let i in numberArray) {
  if (numberArray[i] < lowestNum) {
    lowestNum = numberArray[i];
  }
}
console.log(lowestNum);

// сумма чисел
let sumOfNum: number = 0;

for (let i in numberArray) {
  sumOfNum = sumOfNum + numberArray[i];
}

console.log(sumOfNum);

// создать новый массив с числами от 70
let array70to80: number[] = [];

for (let i in numberArray) {
  if (numberArray[i] >= 70) {
    array70to80.push(numberArray[i]);
  }
}

console.log(array70to80);

// массив до 30
let array10to30: number[] = [];

for (let i in numberArray) {
  if (numberArray[i] <= 30) {
    array10to30.push(numberArray[i]);
  }
}

console.log(array10to30);

// соединить массивы
let newArray: number[] = [...array10to30, ...array70to80];

console.log(newArray);

// вывести количество элементов массива
console.log(newArray.length);

// заменить все числа от 30 до 50 на 20
for (let i in numberArray) {
  if (numberArray[i] >= 30 && numberArray[i] <= 50) {
    numberArray[i] = 20;
  }
}

console.log(numberArray);

// заменить все числа от 50 до 70 на 80
for (let i in numberArray) {
  if (numberArray[i] >= 50 && numberArray[i] <= 70) {
    numberArray[i] = 80;
  }
}
console.log(numberArray);

// сумма всех чисел
let finalSumOfNum: number = 0;

for (let i in numberArray) {
  finalSumOfNum = finalSumOfNum + numberArray[i];
}

console.log(`Сумма чисел конечного массива ${finalSumOfNum}`);

// Алгоритмические задачи
console.log('--- Алгоритмические задачи ---');
// На телеканале “Нетфоу” есть 5 самых популярных передач, которые собирают большое количество зрителей и идут разное время. 
// Вывести количество рекламы для каждой передачи, 
// с учетом что на каждые 10 000 зрителей и на 10 минут от общей продолжительности - добавляется 1 реклама 
// (условно для часовой передачи максимум 6 реклам)
console.log('--- Задача 4 ---');
const programm = [
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
]

let numberOfAds = 0;

for (let i in programm) {
    numberOfAds = Math.floor(programm[i].watchers / 10000)
    console.log(`Programm ${programm[i].title}`);
    if (numberOfAds > programm[i].duration / 10) {
        console.log(`Number of ads: ${programm[i].duration / 10}`);
    } else {
        console.log(`Number of ads: ${numberOfAds}`);
    }
}

// В рамках научной выставки, чтоб дойти до финала необходимо пройти 4 этапа: 
// Отбор, Конкурс, Дуэль и Гранд. 
// После прохождения каждого этапа команде начисляется 2000 баллов. 
// На каждом этапе команда зарабатывает еще определенное количество баллов.
// Для прохождения Отбора - 5000 баллов, для Конкурса - 10000, для Дуэли - 15000, для Гранда - 20000.
// Выводить количество баллов на каждом этапе и статус прохождения команды. 

enum stage {
    CHOOSING = 'Choosing',
    CONTEST = 'Contest',
    DUEL = 'Duel',
    GRANT = 'Grant'
}

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const expo = () => {
    let earnedPoints: number = 0
    
    console.log(stage.CHOOSING);
    earnedPoints = 2000 + randomInt(1000, 5000)
    console.log(earnedPoints);
    
    if (earnedPoints > 5000) {
        console.log(stage.CONTEST);
        earnedPoints = 2000 + randomInt(1000, 5000)
        console.log(earnedPoints);

        if (earnedPoints > 10000) {
            console.log(stage.DUEL);
            earnedPoints = 2000 + randomInt(1000, 5000)
            console.log(earnedPoints);

            if (earnedPoints > 15000) {
                console.log(stage.DUEL);
                earnedPoints = 2000 + randomInt(1000, 5000)
                console.log(earnedPoints);

                if (earnedPoints > 20000) {
                    console.log(stage.GRANT);
                    console.log(earnedPoints);
                    console.log('Yor won a grant');
                    
                }
            }
        }
    }
}

console.log('--- Задача 5 ---');
expo()

// В зоопарк привезли 3 животных. 
// Рассчитать количество корма для каждого животного на год, с учетом что на 100 кг в день необходимо 4 кг корма. 
// Вывести расчет корма на год для каждого животного.

console.log('--- Задача 6 ---');

const animalArray = [
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
]

let food: number = 0;
for (let i in animalArray) {
    food = Math.ceil(animalArray[i].weight/4) * 365;
    console.log(`${animalArray[i].name} needs ${food} kg of food`);
}