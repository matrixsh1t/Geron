// декоратор

// function getName(name:Function) {
//     name.prototype.name = 'test'
//   }

//   @getName
//   class Uuser {
//     name: string

//     printName() {
//       console.log(this.name);
//     }
//   }

//   const user = new Uuser()

// array.find
// .includes и .some - проверить

// trello 13.1

// самостоятельная работа

// Задача 1
interface ICitizen {
  city: string;
  age: number;
  gender: string;
  prof: string;
  education: string;
}

const peopleArray: ICitizen[] = [
  {
    city: "Pavlodar",
    age: 3,
    gender: "male",
    prof: "CEO",
    education: "high",
  },
  {
    city: "Semey",
    age: 40,
    gender: "male",
    prof: "CTO",
    education: "high",
  },
  {
    city: "Pavlodar",
    age: 30,
    gender: "male",
    prof: "worker",
    education: "midle",
  },
  {
    city: "Pavlodar",
    age: 30,
    gender: "male",
    prof: "CEO",
    education: "high",
  },
];

class findGroupOfPeople {
  private _ageMin: number;
  private _ageMax: number;
  private _array: ICitizen[];

  constructor(min, max, educ, isManager) {
    (this._ageMin = min), (this._ageMax = max), (this._array = peopleArray);
  }

  findGroup() {
    const group = this._array.filter((person) => {
      return (
        person.age > this._ageMin &&
        person.age < this._ageMax &&
        (person.prof === "CEO" || person.prof === "CTO") &&
        person.education === "high"
      );
    });
    return group;
  }
}

export const newGroup = new findGroupOfPeople(10, 35, "high", true);

// Алгоритмические задачи
// Задача 1

type Ttype = "income" | "outcome";

interface ITransaction {
  summ: number;
  category: string;
  type: Ttype;
}

const data: ITransaction[] = [
  {
    summ: 10,
    category: "work",
    type: "income",
  },
  {
    summ: 20,
    category: "home",
    type: "income",
  },
  {
    summ: 30,
    category: "work",
    type: "outcome",
  },
  {
    summ: 40,
    category: "home",
    type: "outcome",
  },
];

class FilterTransactions {
  private _data: ITransaction[];

  constructor() {
    this._data = data;
  }
  private getCategories() {
    let category: string[] = [];

    this._data.forEach((transaction) => {
      if (!category.includes(transaction.category)) {
        category.push(transaction.category);
      }
    });
    return category;
  }

  getSumOfOutcome() {
    let result: string = "";
    const categories = this.getCategories();

    for (let i in categories) {
      const sum = this._data
        .filter((trans) => trans.category === categories[i])
        .reduce((sum, current) => sum + current.summ, 0);

      result += `The category is ${categories[i]}. The sum = ${sum}\n`;
    }

    return result;
  }
}

export const transaction = new FilterTransactions();

// Задача 2

interface IBook {
  title: string;
  author: string;
  publicationYear: number;
  genre: string;
}

interface INewBook extends IBook {
  bookNumber?: number;
}

const bookCatalogue: IBook[] = [
  {
    title: "Angels and Deamons",
    author: "Dan Brown",
    publicationYear: 2010,
    genre: "Science fiction",
  },
  {
    title: "Angels and Deamons",
    author: "Dan Brown",
    publicationYear: 2010,
    genre: "Science fiction",
  },
  {
    title: "Da Vinci Code",
    author: "Dan Brown",
    publicationYear: 2009,
    genre: "Science fiction",
  },
  {
    title: "World Wars",
    author: "Herbert Wells",
    publicationYear: 1950,
    genre: "Science fiction",
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oskar Wilde",
    publicationYear: 1900,
    genre: "Science fiction",
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oskar Wilde",
    publicationYear: 1900,
    genre: "Science fiction",
  },
];

class CreateNewCatalogue {
  private _bookCatalogue: IBook[];
  private _newCatalogue: INewBook[] = [];

  constructor() {
    this._bookCatalogue = bookCatalogue;
  }

  // функция для сравнения объектов
  private isEqual(bookA: IBook, bookB: IBook): boolean {
    return (
      bookA.title === bookB.title &&
      bookA.author === bookB.author &&
      bookA.publicationYear === bookB.publicationYear &&
      bookA.genre === bookB.genre
    );
  }

  makeNewCatalogue() {
    this._bookCatalogue.forEach((book) => {
      const existingBook = this._newCatalogue.find((newBook) =>
        this.isEqual(newBook, book)
      );

      if (existingBook) {
        existingBook.bookNumber = (existingBook.bookNumber || 0) + 1;
      } else {
        const newBook: INewBook = { ...book, bookNumber: 1 };

        this._newCatalogue.push(newBook);
      }
    });

    return this._newCatalogue;
  }
}

export const newCat = new CreateNewCatalogue();

// Задача 3

interface IDayInfo {
  dayNum: number;
  weather: string;
}

interface ISales {
  itemsSold: number;
  day: IDayInfo;
}

const salesData: ISales[] = [
  {
    itemsSold: 30,
    day: {
      dayNum: 1,
      weather: "Sunny, +30C",
    },
  },
  {
    itemsSold: 300,
    day: {
      dayNum: 2,
      weather: "Sunny, +20C",
    },
  },
  {
    itemsSold: 3000,
    day: {
      dayNum: 3,
      weather: "Snowy, -5C",
    },
  },
  {
    itemsSold: 3001,
    day: {
      dayNum: 4,
      weather: "Rainy, +5C",
    },
  },
];

class FindDailySales {
  private _salesData: ISales[];

  constructor() {
    this._salesData = salesData;
  }

  getDay() {
    let result: string = "";

    const dayWithMoreThen1000Sales = this._salesData.filter(
      (sale) => sale.itemsSold > 1000
    );

    for (let i in dayWithMoreThen1000Sales) {
      result += `A day with more than 1000 sales is ${dayWithMoreThen1000Sales[i].day.dayNum} and the weather is ${dayWithMoreThen1000Sales[i].day.weather}\n`;
    }

    return result;
  }
}

export const day = new FindDailySales();

// Задача 4

interface IFlightPhase {
  phase1: boolean;
  phase2: boolean;
}

const flightData: IFlightPhase[] = [
  {
    phase1: true,
    phase2: true,
  },
  {
    phase1: true,
    phase2: false,
  },
  {
    phase1: false,
    phase2: false,
  },
];

class FlightAnalysis {
  private _flightData: IFlightPhase[];

  constructor() {
    this._flightData = flightData;
  }

  analyseFlight() {
    let result: string = "";
    let counter: number = 1;

    this._flightData.forEach((flight) => {
      if (flight.phase1 && flight.phase2) {
        result += `All phases of flight number ${counter} were successful, you can use this data for another flight\n`
      } else {
        result += `The phases of flight number ${counter} are not correct, you need to use another algorythm.\n`
      }
      counter++;
    });
    return result;
  }
}

export const flight = new FlightAnalysis();
