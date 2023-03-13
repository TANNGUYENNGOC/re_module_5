import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facility} from "../../model/facility";


@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  URL = "http://localhost:3000/facility"
  constructor(private httpClient:HttpClient) { }
  getAll(){
    return this.httpClient.get<Facility[]>(this.URL);
  }
  findById(id:number){
    return this.httpClient.get<Facility>(this.URL+"/"+id);
  }

  save(facility:Facility){
    return this.httpClient.post(this.URL,facility);
  }

  update(id:number,facility:Facility){
    return this.httpClient.patch(this.URL+"/"+id,facility);
  }


}
