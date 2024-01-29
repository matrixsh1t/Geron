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
// const peopleArray: ICitizen[] = [
//     {
//         city: "Pavlodar",
//         age: 3,
//         gender: "male",
//         prof: "CEO",
//         education: "high"
//     },
//     {
//         city: "Semey",
//         age: 40,
//         gender: "male",
//         prof: "CTO",
//         education: "high"
//     },
//     {
//         city: "Pavlodar",
//         age: 30,
//         gender: "male",
//         prof: "worker",
//         education: "midle"
//     },
//     {
//         city: "Pavlodar",
//         age: 30,
//         gender: "male",
//         prof: "CEO",
//         education: "high"
//     },
// ]


// interface ICitizen {
//     city: string,
//     age: number,
//     gender: string,
//     prof: string,
//     education: string
// }

// class findGroupOfPeople {
//     private _ageMin: number
//     private _ageMax: number
//     private _educ: string
//     private _isManager: boolean
//     private _array: ICitizen[]

//     constructor(min, max, educ, isManager) {
//         this._ageMin = min,
//         this ._ageMax = max,
//         this._educ = educ,
//         this._isManager = isManager,
//         this._array = peopleArray
//     }

//     findGroup() {
//         // let group: ICitizen[] = []

//         const group = this._array.filter((person) => { 
//             return (person.age > this._ageMin) && 
//             (person.age < this._ageMax) && 
//             (person.prof === "CEO" || person.prof === "CTO") && 
//             (person.education === "high")
//         })
//         return group
//     }
// }

// export const newGroup = new findGroupOfPeople(10,35,"high", true)


// самостоятельная работа
type Ttype = "income" | "outcome"

interface ITransaction {
    summ: number,
    category: string,
    type: Ttype
}

const data: ITransaction[] = [
    {
        summ: 10,
        category: "work",
        type: "income"
    },
    {
        summ: 20,
        category: "home",
        type: "income"
    },
    {
        summ: 30,
        category: "work",
        type: "income"
    },
    {
        summ: 40,
        category: "home",
        type: "income"
    },
]

class filterTransactions {
    private _data: ITransaction[]


    constructor() {
        this._data = data
    }

    getGroup() {
        let category: string[] = []

        // category.push(this._data[0].category)

        this._data.forEach((trans) => {
            if (!category.includes(trans.category)) {
                category.push(trans.category)
            }    
        })

        category.forEach((cat) => {
            this._data.reduce((finalSum, current) => {
                finalSum + current, 0
            })
        })
        
    }
}

export const transaction = new filterTransactions()