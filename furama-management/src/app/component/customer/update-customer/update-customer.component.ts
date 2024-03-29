import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../model/customer-type";
import {CustomerService} from "../../../service/customer/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
import {Customer} from "../../../model/customer";
import {async} from "rxjs/internal/scheduler/async";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  formUpdateCustomer: FormGroup;
  customerTypeList: CustomerType [] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.formUpdateCustomer = new FormGroup({
      id: new FormControl("",[Validators.required]),
      customerType: new FormControl("",[Validators.required]),
      name: new FormControl("",[Validators.required]),
      dateOfBirth: new FormControl("",[Validators.required]),
      gender: new FormControl("",[Validators.required]),
      idCard: new FormControl("",[Validators.required]),
      phoneNumber: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
      address: new FormControl("",[Validators.required])
    });

  }

  async ngOnInit(): Promise<void> {
    await this.activatedRoute.paramMap.subscribe(next => {
      let id = parseInt(next.get('id'));
      if (id != null) {
        //back-end
        // this.formUpdateCustomer.patchValue({
        //   ...data,
        //   // @ts-ignore
        //   customerType: data.customerType.id
        // });

        this.getCustomer(id);
      }
    });
    this.getListCustomerType();
  }

   getCustomer(id: number) {
     this.customerService.findById(id).subscribe(data => {
       console.log(data)
      this.formUpdateCustomer.patchValue(data);
    });
  }

  getListCustomerType() {
    return this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    })
  }

  compareWith(o1: Customer, o2: Customer): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  updateCustomer() {
    // let customer = {
    //   ...this.formUpdateCustomer.value,
    //   customerType:{
    //     id: this.formUpdateCustomer.controls['customerType'].value
    //   }
    // };
    if(this.formUpdateCustomer.valid){
      let customer = this.formUpdateCustomer.value;
      return this.customerService.update(customer.id, customer).subscribe(next => {
        alert("Chỉnh sửa thành công");
        this.router.navigateByUrl("customer/list");
      })
    }else {
      alert("Chỉnh sửa không thành công");
      this.router.navigateByUrl("customer/list");
    }

  }
}
