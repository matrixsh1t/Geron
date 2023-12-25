// const getResult = async (status)=> {
//     // let user: TUser = {
//     //     name: "user",
//     //     age: 25
//     // }

//     return new Promise((resolve, reject) => {
//      setTimeout(() => {
//        if (status) {
//          resolve (user);
//        } else {
//          reject (new Error("error"))
//        }
//      }, 1000)

//    })
//    }

// const checkResult = async () => {
//     await getResult(true)
//     .then(response => {
//          console.log((response))})
//     .catch(error => {
//          console.log(error);
//      })
//      .finally(() => {
//          console.log("Работа промиса завершена");

//      })
//      console.log("Привет");

// }

// const checkResult1 = async () => {
//     let user = await getResult(true) as TUser
//     console.log(`Имя: ${user.name}`)

// }
// checkResult1().catch((error) => {
//     console.log(error);

// })

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response => {
//     return response.json()
// }).then( data => {
//     console.log(data, data.userId);

// })
// type TUser = {
//     userId: number
//     id: number,
//     body: string,
//     title: string
// }

// const getData = async () => {
//     return await fetch("https://jsonplaceholder.typicode.com/posts/1")
// }

// const getResult = async (status)=> {
//     let user: TUser = await (await getData())

//     return new Promise((resolve, reject) => {
//      setTimeout(() => {
//        if (status) {
//          resolve (user);
//        } else {
//          reject (new Error("error"))
//        }
//      }, 1000)

//    })
//    }

// getResult(true)

type TUser = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const getData = async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
}

const getResult = async () => {
    let data: TUser[] = await (await getData()).json()
    return data
}

const findUser = async () => {
    let users: TUser[] = await getResult()
    let userBody: TUser | null = null;

    users.forEach(user => {
        if (!userBody || userBody.body.length < user.body.length) {
            userBody = user
        }
    })
    return userBody
}

findUser().then((data)=> {
    console.log(data);
}).catch((error) => {
    console.log(error);
    
})
