import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facility} from "../../model/facility";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  URL = "http://localhost:3000/facility"

  constructor(private httpClient: HttpClient) {
  }

  getAll():Observable<any> {
    return this.httpClient.get<Facility[]>(this.URL);
  }

  findById(id: number):Observable<any> {
    return this.httpClient.get<Facility>(this.URL + "/" + id);
  }

  save(facility: Facility):Observable<any> {
    return this.httpClient.post(this.URL, facility);
  }

  update(id: number, facility: Facility) : Observable<any> {
    return this.httpClient.patch(this.URL + "/" + id, facility);
  }

  remove(id: number): Observable<any> {
    return this.httpClient.delete(this.URL + "/" + id);
  }


}
