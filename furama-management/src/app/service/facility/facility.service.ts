import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facility} from "../../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient:HttpClient) { }
  getAll(){
    return this.httpClient.get<Facility[]>("http://localhost:3000/facility");
  }
}
