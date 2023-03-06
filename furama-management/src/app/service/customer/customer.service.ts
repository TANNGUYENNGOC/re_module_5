import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Customer[]>("http://localhost:8080/api-customer/listCustomer")
  }
}
