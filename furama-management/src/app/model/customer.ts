import {CustomerType} from "./customer-type";

export interface Customer {
  id?:number;
  customerType?:string;
  name?:string;
  dateOfBirth?:string;
  gender?:boolean;
  idCard?:string;
  phoneNumber?:string;
  email?:string;
  address?:string;
}
