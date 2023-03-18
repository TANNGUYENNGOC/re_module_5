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
  page : number = 0;
  totalPage : number = 0;
  size : number = 0;

  constructor(private xeService: ServiceService) { }

  ngOnInit(): void {
  this.getAllXe()
  }

  getAllXe(){
    return this.xeService.getAll(this.page).subscribe(next=>{
      this.listXe = next.content;
      this.totalPage = next.totalPages;
      this.page = next.number;
      this.size = next.size;
    },error => {

    })
  }

  removeXe() {
    return this.xeService.remove(this.xeRemove.id).subscribe(next=>{
      this.getAllXe();
    });
  }

  sau() {
    if(this.page < this.totalPage-1){
      this.page++;
      this.getAllXe();
    }
  }

  truoc() {
    if(this.page > 0){
      this.page--;
      this.getAllXe();
    }
  }
}
