import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../../model/customer-type";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
import {CustomerService} from "../../../service/customer/customer.service";
import {Customer} from "../../../model/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerTypeList: CustomerType[] = [];
  createFormCustomer: FormGroup;

  constructor(private customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
              private router: Router,
              private toast:ToastrService) {


  }

  async ngOnInit(): Promise<void> {
    this.createFormCustomer = new FormGroup({
      customerType: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      dateOfBirth: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      idCard: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required])
    })
    await this.getListCustomerType();

  }

  saveCustomer() {
    // let customer = {
    //   ...this.createFormCustomer.value,
    //   customerType: {
    //     id: this.createFormCustomer.controls['customerType'].value
    //   }
    // };

    if (this.createFormCustomer.valid) {
      let customer = this.createFormCustomer.value;
      return this.customerService.save(customer).subscribe(next => {
        this.createFormCustomer.reset();
        this.toast.success("Thêm mới không thành công","Thêm mới");
        this.router.navigateByUrl("customer/list");
      });
    } else {
      this.toast.success("Thêm mới không thành công","Thêm mới");
      this.router.navigateByUrl("customer/list");
    }


  }

  getAllListCustomerType() {
    return this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    }, error => {

    });
  }

  getListCustomerType() {
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    })
  }
}
