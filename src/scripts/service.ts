import { employees, seasons } from './data';
import { TSeason, seasonList, TEmployee, TDepAndEmplNum } from "./types";

// [1 подзадача] Есть статистика за каждый сезон, в ней указано: сезон,
// количество закрытых проектов, доход, количество новых сотрудников,
// количество увольнительных, количество новых проектов

// найти самый прибыльный сезон и вывести всю информацию о нем
// найти сезон с самым низким доходом и вывести всю информацию о нем
// вывести информацию в каком сезоне больше всего появилось новых сотрудников
// вывести информацию в каком сезоне было больше всего увольнительных



let tempObj: TSeason | null = null;

export const highestIncome = () => {
  Object.entries(seasons).forEach(([k, v]) => {
    if (!tempObj || v.income > tempObj.income) {
      tempObj = v;
    }
  });
  return tempObj;
};

let tempObj1: TSeason | null = null;

export const lowestIncome = () => {
  Object.entries(seasons).forEach(([k, v]) => {
    if (!tempObj1 || v.income < tempObj1.income) {
      tempObj1 = v;
    }
  });
  return tempObj1;
};

let tempObj2: TSeason | null = null;

export const mostHired = () => {
  Object.entries(seasons).forEach(([k, v]) => {
    if (!tempObj2 || v.hired > tempObj2.hired) {
      tempObj2 = v;
    }
  });
  return tempObj2;
};

export const mostDismissedSeason = () => {
  let tempDismissed: number | null = null;
  let tempStr: string = "";

  Object.entries(seasons).forEach(([k, v]) => {
    if (!tempDismissed || v.dismissed > tempDismissed) {
      tempDismissed = v.dismissed;
      tempStr = k;
    }
  });
  return tempStr;
};

// [2 подзадача] Также есть статистика по новым сотрудникам, информация о новом сотруднике:
// имя, отдел, стаж (при трудоустройстве), есть/нет закрытые проекты, зарплата.




// вывести отдел с самой большой средней зарплатой у сотрудников

enum EDep {
  TECH = "Техниеский",
  DESIGN = "Дизайн",
  PROJECT = "Проектировщики",
}

const getEmployeeDep = (dep: string) => {
  switch (dep) {
    case "TECH":
      return EDep.TECH;
    case "DESIGN":
      return EDep.DESIGN;
    default:
      return EDep.PROJECT;
  }
};

// func to return a number (object TtempDep[]) of employees in each dep
export const getEmployeeNumInEachDep = (emplArray): TDepAndEmplNum[] => {
  let tempTech: number = 0;
  let tempDes: number = 0;
  let tempProj: number = 0;

  emplArray.forEach((employee) => {
    switch (employee.departament) {
      case "TECH":
        tempTech++;
        break;
      case "DESIGN":
        tempDes++;
        break;
      case "PROJECT":
        tempProj++;
        break;
    }
  });
  // return a number of employees in each department
  return [
    {
      title: "TECH",
      employees: tempTech,
    },
    {
      title: "DESIGN",
      employees: tempDes,
    },
    {
      title: "PROJECT",
      employees: tempProj,
    },
  ];
};

// func to get a dep with maximum employees out of TtempDep array
export const findMaxEmployeeDep = (emplArray: TDepAndEmplNum[]): TDepAndEmplNum => {
  let maxWorkers: number = 0;
  let resultDep: TDepAndEmplNum | null = null;

  emplArray.forEach(employee => {
    if (employee.employees >= maxWorkers) {
      maxWorkers = employee.employees
      resultDep = employee
    }   
  })
  return resultDep
}
// вывести отдел, в котором больше всего новых сотрудников
export const maxEmployeesInDep: TDepAndEmplNum[] = getEmployeeNumInEachDep(employees)

// вывести отдел, в котором больше всего сотрудников с опытом от 3 лет
// func to get max eperienced employee dep
export const maxEpxEmployeeDep = (emplArray) => {
  let tempEmpArray: TEmployee[] = []

  emplArray.filter(employee => {
    if (employee.experience > 3) {
      tempEmpArray.push(employee)
    }
  })
   const tempArr = getEmployeeNumInEachDep(tempEmpArray)
   return findMaxEmployeeDep(tempArr)
}

// вывести информацию с именем и стажем сотрудников, которые уже закрыли проекты.
type TEmplNameAndEpx = {
  name: string,
  experience: number
}

export const getEmplNameAndExp = (employeeArr: TEmployee[]): TEmplNameAndEpx[] => {
  
  return
}