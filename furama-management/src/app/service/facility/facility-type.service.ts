import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FacilityType} from "../../model/facility-type";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  URL = "http://localhost:3000/facilytyType";
  constructor(private httpClient:HttpClient) { }
  getAll(){
    return this.httpClient.get<FacilityType[]>(this.URL);
  }
}
