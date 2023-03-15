import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL = "http://localhost:3000/customer"

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<Customer[]>(this.URL)
  }

  save(customer: Customer) {
    return this.httpClient.post(this.URL, customer);
  }

  // delete(id:number){
  //   return this.httpClient.delete("http://localhost:8080/api-customer/deleteCustomerById/"+id);
  // }
  //
  findById(id: number) {
    return this.httpClient.get<Customer>(this.URL + "/" + id);
  }

  update(id: number, customer: Customer) {
    return this.httpClient.patch(this.URL + "/" + id, customer);

  }

  remove(id: number) {
    return this.httpClient.delete(this.URL + "/" + id);
  }
  searchCustomer(name: string, email: string, customerType: string) {
    debugger
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer?name_like="+name+"&email_like="+email+"&customerType.name_like="+customerType);
  }


}
