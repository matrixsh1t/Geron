// Ссылка на пользователей - https://run.mocky.io/v3/b1bd6eba-759d-4e61-9d45-0816794d2d0b

import { TUser } from "./types";

// Ссылка на товары - https://run.mocky.io/v3/de2f0069-2896-4b67-99cc-fbd0ff242ccf



export const getUserArrayFromLink = async () => {
  const userArray = fetch(
    "https://run.mocky.io/v3/b1bd6eba-759d-4e61-9d45-0816794d2d0b"
  );
  return (await (await userArray).json()) as TUser[];
};

export const getSpecificUser = async () => {
  let users: TUser[] = await getUserArrayFromLink();
  let specificUser: TUser;

  users.forEach((user) => {
    if (user.login === "alex777") {
      specificUser = user;
    }
  });
  return specificUser;
};

const getUsers = () => {
  getUserArrayFromLink().then((data) => {
    return data;
  });
};

export const callFunc = (aFunc: Function) => {
  aFunc()
    .then((data) => {
      console.log("===================== HW =====================");
      console.log(data);
    })
    .catch((error: Error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("data retrieve finished");
    });
};
