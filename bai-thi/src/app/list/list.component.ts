import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import {Student} from '../../model/student';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listStudent : Student [] = [];
  constructor(private studentService:ServiceService) { }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent(){
    return this.studentService.getAll().subscribe(next=>{
      this.listStudent = next;
    })
  }
}
