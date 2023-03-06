import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../../model/customer-type";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerTypeList:CustomerType[] = [];
  constructor(private customerTypeService:CustomerTypeService) {
    this.getAllCustomerType();
  }

  ngOnInit(): void {

  }

  getAllCustomerType(){
    return this.customerTypeService.getAll().subscribe(next=>{
      this.customerTypeList = next;
    }, error => {

    })
  }

}
