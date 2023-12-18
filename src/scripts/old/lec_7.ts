type TEmployee = {
    name: string,
    age: number,
    isActive: boolean,
    salary: number
}

let employees: TEmployee[] = [
    {
      "name": "Rina",
      "age": 58,
      "isActive": true,
      'salary': 500000
    },
    {
      "name": "Kathryn",
      "age": 25,
      "isActive": false,
      'salary': 500000
    },
    {
      "name": "Wilfred",
      "age": 27,
      "isActive": true,
      'salary': 500000
    },
    {
      "name": "Genna",
      "age": 36,
      "isActive": true,
      'salary': 500000
    },
    {
      "name": "Celle",
      "age": 45,
      "isActive": true,
      'salary': 500000
    },
    {
      "name": "Torre",
      "age": 24,
      "isActive": false,
      'salary': 500000
    },
    {
      "name": "Amerigo",
      "age": 46,
      "isActive": false,
      'salary': 500000
    },
    {
      "name": "Shayne",
      "age": 11,
      "isActive": true,
      'salary': 500000
    },
    {
      "name": "Darline",
      "age": 32,
      "isActive": false,
      'salary': 500000
    },
    {
      "name": "Rourke",
      "age": 64,
      "isActive": false,
      'salary': 500000
    }
  ]
console.log("--- HW ---");

// Сделать приложение, которое убирает неактивных сотрудников создает новый список сотрудников с установленной надбавкой по следующим условиям:
// до 20: надбавка 50 000
// до 30: надбавка 100 000
// до 40: надбавка 150 000
// от 40: надбавка 200 000
// Отсортировать полученный список по возрасту

let newList = employees.filter((item) => {
    return item.isActive
});

console.log(newList);


const salaryIncrease = (list: TEmployee[]) => {
    const increasedSalaryList: TEmployee[] = [];

    for (const employee of list) {
        if (employee.age < 20) {
            employee.salary += 50000;
        } else if (employee.age >= 20 && employee.age < 30) {
            employee.salary += 100000;
        } else if (employee.age >= 30 && employee.age < 40) {
            employee.salary += 150000;
        } else {
            employee.salary += 200000;
        }
        increasedSalaryList.push(employee);
    }

    return increasedSalaryList;
};

console.log(salaryIncrease(newList).sort((a,b) => {
    return a.age - b.age
}));
