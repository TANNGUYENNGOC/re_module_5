import {Employee} from "./employee";
import {Customer} from "./customer";
import {Facility} from "./facility";

export interface Contract {
  id?:number;
  startDate?:string;
  endDate?:string;
  deposit?:number;
  employee?:Employee;
  customer?:Customer;
  facility?:Facility
}
