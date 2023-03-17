import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service/service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Clazz} from '../../model/clazz';
import {Student} from '../../model/student';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  clazzList :Clazz [] = [];
  formUpdate: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    gender: new FormControl(),
    clazz: new FormControl(),
  });

  constructor(private studentService: ServiceService,
              private activatedRoute:ActivatedRoute,
              private router :  Router) {

  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(next=>{
      let id = parseInt(next.get('id'));
      if(id!=null){
        this.getStudent(id);
      }
    });

    this.getAllClazz();
  }

  compareWidth(o1:Student, o2:Student) : boolean{
    return o1 && o2 ? o1.id===o2.id : o1===o2;
  }
  getStudent(id: number) {
    return  this.studentService.findById(id).subscribe(data => {
    this.formUpdate.patchValue(data);
    });
  }
  getAllClazz(){
    return this.studentService.getAllClazz().subscribe(next=>{
      this.clazzList = next;
    })
  }

  update() {
    let student:Student = this.formUpdate.value;
    this.studentService.update(student).subscribe(next=>{
      this.router.navigateByUrl("");
    })
  }
}
