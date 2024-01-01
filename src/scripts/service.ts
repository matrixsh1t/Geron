import { IUser } from "./types";


const getLinkData = async () => {
    return fetch("https://run.mocky.io/v3/a27db518-069d-45a3-8fac-938b5c2228d1");
  };

export const getUserData = async () => {
      const userData = (await (await getLinkData()).json()) as IUser[];
      let result: IUser[] =[]
      let tempUserArray: IUser[] = []
  
      userData.forEach(user => {
          if (!user || user.isActive) {
              user.sallary = Number(user.sallary) + Number(user.sallary) * 0.1
              tempUserArray.push(user)
          } else {
              user.sallary = Number(user.sallary)
              tempUserArray.push(user)
          }
      })
      
      result = tempUserArray.sort((a, b) => {
        return a.sallary-b.sallary;
      })

      return result
  }

  export const callFunc = (myFunc: Function) => {
    myFunc().then( (data) => {
    console.log("===================== HW =====================");
    console.log(data);
}).catch((error) => {
    console.log(error);
}
).finally(() => {
    console.log("Calculation is finished");
})}