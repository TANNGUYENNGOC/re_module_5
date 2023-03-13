import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  URL = "http://localhost:3000/employee";
  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Employee[]>(this.URL);
  }
}
