import {Clazz} from './clazz';

export interface Student {
  id?:number;
  name?:string;
  gender?:number;
  clazz:Clazz;
}
