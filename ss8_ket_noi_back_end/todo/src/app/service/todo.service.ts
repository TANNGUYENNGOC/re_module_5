import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  URL = "http://localhost:3000/categorys";

  getAll(){
    return this.httpClient.get<Todo[]>(this.URL);
  }

  save(todo:Todo){
    return this.httpClient.post(this.URL,todo);
  }

  update(todo:Todo){
    return this.httpClient.patch(this.URL+"/"+todo.id,todo);
  }

  delete(id:number){
    return this.httpClient.delete(this.URL+"/"+id);
  }

}
