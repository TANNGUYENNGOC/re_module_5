import { Component, OnInit } from '@angular/core';
import {Xe} from "../model/xe";
import {ServiceService} from "../service/service.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listXe: Xe [] = [];
  xeRemove: Xe ;
  constructor(private xeService: ServiceService) { }

  ngOnInit(): void {
  this.getAllXe()
  }

  getAllXe(){
    return this.xeService.getAll().subscribe(next=>{
      this.listXe = next;
    })
  }

  removeXe() {
    return this.xeService.remove(this.xeRemove.id).subscribe(next=>{
      this.getAllXe();
    });
  }
}
