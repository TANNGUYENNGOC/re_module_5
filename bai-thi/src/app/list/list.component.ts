import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service/service.service';
import {Student} from '../../model/student';
import {Clazz} from '../../model/clazz';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

}
