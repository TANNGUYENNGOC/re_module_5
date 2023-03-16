import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../../model/student';
import {Observable} from 'rxjs';
import {Clazz} from '../../model/clazz';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URL = "http://localhost:3000/students";
  constructor(private httpClient:HttpClient) { }

  getAll() :Observable<any>{
    return this.httpClient.get<Student[]>(this.URL);
  }
  getAllClazz() :Observable<any> {
    return this.httpClient.get<Clazz[]>("http://localhost:3000/clazzs");
  }

  save(student:Student):Observable<any> {
    return this.httpClient.post(this.URL,student);
  }

  findById(id:number):Observable<any>{
    return  this.httpClient.get<Student>(this.URL+"/"+id);
  }

  update(student:Student):Observable<any>{
    return this.httpClient.patch(this.URL+"/"+student.id,student);
  }

  delele(id:number){
    return this.httpClient.delete(this.URL+"/"+id);

  }
}
