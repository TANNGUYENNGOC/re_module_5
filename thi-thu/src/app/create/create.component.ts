import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../service/service.service";

import {LoaiXe} from "../model/loai-xe";
import {Xe} from "../model/xe";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  loaiXeList: LoaiXe [] = [];
  formCreate: FormGroup = new FormGroup({
    id: new FormControl(),
    loaiXe: new FormControl(),
    tenNhaXe: new FormControl(),
    diemDi: new FormControl(),
    diemDen: new FormControl(),
    sdt: new FormControl(),
    email: new FormControl(),
    gioDi: new FormControl(),
    gioDen: new FormControl()
  })

  constructor(private xeService: ServiceService) {
  }

  ngOnInit(): void {
    this.getAllLoaiXe();

  }

  getAllLoaiXe() {
    return this.xeService.getAllLoaiXe().subscribe(next => {
      this.loaiXeList = next;
    });
  }

  createXe() {
    let xe : Xe = this.formCreate.value;
    return this.xeService.addXe(xe).subscribe(next => {
      alert("Thêm mới thành công");
    });
  }
}
