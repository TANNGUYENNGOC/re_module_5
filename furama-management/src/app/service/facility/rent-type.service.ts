import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RentType} from "../../model/rent-type";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  URL = "http://localhost:3000/rentType";
  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<RentType[]>(this.URL);
  }
}
