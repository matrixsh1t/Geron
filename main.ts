import { User } from "./src/models/User";
import { getUserArrayFromLink, callFunc, getSpecificUser } from "./src/scripts/service";

getSpecificUser().then((user) => {
    let registeredUser = new User(user)
    console.log(registeredUser.toString());
    console.log(registeredUser.getFullname());
    console.log(registeredUser.getLoginInfo);
    registeredUser.setCityInfo = "new City"
    console.log(registeredUser.getCityInfo); 
})


