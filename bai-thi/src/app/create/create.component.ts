import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ServiceService} from '../service/service.service';
import {Clazz} from '../../model/clazz';
import {Student} from '../../model/student';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() {


  }

  ngOnInit(): void {
  }


}
