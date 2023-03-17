import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Xe} from "../model/xe";
import {LoaiXe} from "../model/loai-xe";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URL_XE = "http://localhost:3000/xe";
  URL_LOAI_XE = "http://localhost:3000/loaixe";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get<Xe[]>("http://localhost:8080/api-xe/listXe");
  }

  getAllLoaiXe():Observable<any>{
    return this.httpClient.get<LoaiXe[]>("http://localhost:8080/api-xe/listLoaiXe");
  }

  addXe(xe:Xe):Observable<any> {
    return this.httpClient.post("http://localhost:8080/api-xe/createXe",xe);
  }
  remove(id:number):Observable<any>{
    return this.httpClient.delete<Xe>("http://localhost:8080/api-xe/delete/"+id)
  }
  findById(id:number):Observable<any>{
    return this.httpClient.get<Xe>("http://localhost:8080/api-xe/detailXe/"+id);
  }
  update(xe:Xe):Observable<any>{
    return this.httpClient.patch("http://localhost:8080/api-xe/update/"+xe.id,xe);
  }
}
