import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service/service.service';
import {Clazz} from '../../model/clazz';
import {FormControl, FormGroup} from '@angular/forms';
import {Student} from '../../model/student';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  listClazz: Clazz [] = [];
  formCreate: FormGroup = new FormGroup({
    name: new FormControl(),
    gender: new FormControl(),
    clazz: new FormControl()
  });

  constructor(private studentService: ServiceService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.getAllClazz();
  }

  getAllClazz() {
    return this.studentService.getAllClazz().subscribe(next => {
      this.listClazz = next;
    });
  }

  createStudent() {
    let student:Student = this.formCreate.value;
    return this.studentService.save(student).subscribe(next=>{
      this.formCreate.reset()
      this.router.navigateByUrl("");
    });
  }
}
