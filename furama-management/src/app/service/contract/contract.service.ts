import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contract} from "../../model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  URL = "http://localhost:3000/contract";
  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Contract[]>(this.URL);
  }
  save(contract:Contract){
    return this.httpClient.post(this.URL,contract);
  }
}
