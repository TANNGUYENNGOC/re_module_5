import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../service/todo.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Todo} from "../model/todo";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number;
  todo: Todo;
  todoFormUpdate: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private todoService: TodoService,
              private  rout:Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      this.id = parseInt(next.get('id'));
    })
    this.todoService.findById(this.id).subscribe(data => {
      this.todoFormUpdate.patchValue(data);

    })
  }

  ngOnInit(): void {
  }

  save() {
    let todo:Todo = this.todoFormUpdate.value;
    this.todoService.update(todo).subscribe(()=>{
      this.rout.navigateByUrl('/listTodo')
    })
  }

}
