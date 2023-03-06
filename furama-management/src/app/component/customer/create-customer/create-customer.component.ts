import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../../model/customer-type";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
import {CustomerService} from "../../../service/customer/customer.service";
import {Customer} from "../../../model/customer";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

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
              private router: Router) {
    this.createFormCustomer = new FormGroup({
      customerType: new FormControl(),
      name: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(),
      idCard: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      address: new FormControl()
    })
    this.getAllCustomerType();
  }

  ngOnInit(): void {

  }

  getAllCustomerType() {
    return this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    }, error => {

    })
  }

  saveCustomer() {
    let customer = {
      ...this.createFormCustomer.value,
      customerType: {
        id: this.createFormCustomer.controls['customerType'].value
      }
    };
    return this.customerService.save(customer).subscribe(next => {
    });
    this.createFormCustomer.reset();
    this.router.navigateByUrl("/customer/list");
    alert("Thêm mới thành công")
  }

}
