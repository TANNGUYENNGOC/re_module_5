import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {ServiceService} from '../service/service.service';
import {Clazz} from '../../model/clazz';
import {Student} from '../../model/student';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  clazzList: Clazz [] = [];
  formUpdate: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private studentService: ServiceService,
              private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    await this.activatedRoute.paramMap.subscribe(next => {
      let id = parseInt(next.get('id'));
      if (id != null) {
        this.getStudent(id);
        console.log(this.getStudent(id));
      }
    });

    this.formUpdate = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      gender: new FormControl(),
      clazz: new FormControl()
    });

    this.getAllClazz();
  }

  getStudent(id: number) {
    this.studentService.findById(id).subscribe(data => {
      this.formUpdate.patchValue(data);
    });
  }

  updateStudent() {
    let student: Student = this.formUpdate.value;
    return this.studentService.update(student).subscribe(next => {
      this.router.navigateByUrl("");
      console.log(student);
      debugger
    });
  }

  compareWidth(o1: Student, o2: Student): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  getAllClazz() {
    return this.studentService.getAllClazz().subscribe(next => {
      this.clazzList = next;
    });
  }
}
