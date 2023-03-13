import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../service/employee/employee.service";
import {Employee} from "../../../model/employee";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employeeList: Employee[] = [];
  p: number = 0;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeService.getAll().subscribe(next=>{
      this.employeeList = next;
      console.log(this.employeeList)
    })
  }
}
