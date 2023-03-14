import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contract} from "../../model/contract";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  URL = "http://localhost:3000/contract";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get<Contract[]>(this.URL);
  }
  save(contract:Contract):Observable<any>{
    return this.httpClient.post(this.URL,contract);
  }

  remove(id:number)
    :Observable<any>
  {
    return this.httpClient.delete(this.URL + "/"+id);
  }
}
