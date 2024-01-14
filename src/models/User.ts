import { TUser } from "../scripts/types";


export class User {
  private fullname: string;
  private login: string;
  private password: string;
  private country: string;
  private city: string;
  private age: number;
  private id: string;

  constructor(para: TUser) {
    this.fullname = para.fullname;
    this.login = para.login;
    this.password = para.password;
    this.country = para.country;
    this.city = para.city;
    this.age = para.age;
    this.id = para.id;
  }
  getFullname() {
    return this.fullname;
  }
  get getLoginInfo() {
    return this.login;
  }
  get getCityInfo() {
    return this.city;
  }
  set setCityInfo(city: string) {
    this.city = city;
  }

  toString() {
    return `The user ${this.login} has ${this.fullname} name`;
  }
}
