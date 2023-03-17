import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service/service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoaiXe} from "../model/loai-xe";
import {Xe} from "../model/xe";


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  loaiXeList : LoaiXe [] = [];
  formUpdate:FormGroup = new FormGroup({
    id: new FormControl(),
    loaiXe: new FormControl("",[Validators.required]),
    tenNhaXe: new FormControl("",[Validators.required]),
    diemDi: new FormControl("",[Validators.required]),
    diemDen: new FormControl("",[Validators.required]),
    sdt: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    gioDi: new FormControl("",[Validators.required],),
    gioDen: new FormControl("",[Validators.required]),
  })
  constructor(private xeService: ServiceService,
              private activatedRoute:ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(next =>{
      let soXe = parseInt(next.get('id'))
      this.xeService.findById(soXe).subscribe(data=>{
        this.formUpdate.patchValue(data);
      })
    });

    this.getAllLoaiXe();
  }

  ngOnInit(): void {

  }

  getAllLoaiXe(){
    this.xeService.getAllLoaiXe().subscribe(next=>{
      this.loaiXeList = next;
    })
  }

  compareWidth(o1:Xe, o2:Xe) : boolean{
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  update() {
    if(this.formUpdate.valid){
      let xe:Xe = this.formUpdate.value;
      console.log(xe)
      this.xeService.update(xe).subscribe(next=>{
        this.router.navigateByUrl("");
        alert("Sửa thành công");
      });
    } else {
      this.router.navigateByUrl("");
      alert("Sửa không thành công");
    }

  }

}
