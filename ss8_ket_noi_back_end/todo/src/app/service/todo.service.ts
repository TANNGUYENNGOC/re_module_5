import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../model/todo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  URL = "http://localhost:3000/categorys";

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('http://localhost:3000/todos');
  }

  findById(id: number): Observable<any> {

    return this.httpClient.get<Todo>('http://localhost:3000/todos/'+id);
  }

  delete(id): Observable<Todo> {
    debugger
    return this.httpClient.delete<any>('http://localhost:3000/todos/'+id)
  }

  save(todo: Todo): Observable<any> {
    return this.httpClient.post<Todo>('http://localhost:3000/todos/', todo)
  }
  update(todo: Todo): Observable<any> {
    return this.httpClient.put<Todo>('http://localhost:3000/todos/'+todo.id, todo)
  }

}
