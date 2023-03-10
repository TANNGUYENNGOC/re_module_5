import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "../../../model/customer-type";
import {CustomerService} from "../../../service/customer/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";

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
              private router:Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      let id = parseInt(next.get('id'));
      if (id != null) {
        this.customerService.findById(id).subscribe(data => {
          this.formUpdateCustomer.patchValue({
            ...data,
            // @ts-ignore
            customerType: data.customerType.id
          });
        }) 
      }
    });

    this.formUpdateCustomer = new FormGroup({
      id: new FormControl(),
      customerType: new FormControl(),
      name: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(),
      idCard: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      address: new FormControl()
    });

    this.getListCustomerType();
  }

  ngOnInit(): void {
  }

  getListCustomerType() {
    return this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    })
  }

  updateCustomer() {
    let customer = {
      ...this.formUpdateCustomer.value,
      customerType:{
        id: this.formUpdateCustomer.controls['customerType'].value

      }
    };


    return this.customerService.save(customer).subscribe(next=>{
      alert("Chỉnh sửa thành công");
      this.router.navigateByUrl("customer/list");
    })
  }
}
