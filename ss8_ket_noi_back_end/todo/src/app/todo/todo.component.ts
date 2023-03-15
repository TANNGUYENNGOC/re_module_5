import {Component, OnInit} from '@angular/core';
import {Todo} from "../model/todo";
import {FormControl} from "@angular/forms";
import {TodoService} from "../service/todo.service";

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Todo;
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
    this.getAllTodo();

  }

  ngOnInit(): void {
  }

  toggleTodo(id: number) {
    this.todoService.delete(id).subscribe(() => {
      alert('thành công')
      this.getAllTodo();
    });
  }


  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe(() => {
        alert('Thêm mới thành công')
      })
      this.content.reset();
    }
  }

  getAllTodo() {
    this.todoService.getAll().subscribe(next => {
      this.todos = next;
    })
  }

}
