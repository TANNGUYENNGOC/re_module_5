import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerService} from "../../../service/customer/customer.service";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
import {CustomerType} from "../../../model/customer-type";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer [] = [];
  customerTypeList: CustomerType [] = [];
  p: number;
  idRemoveCustomer:number;
  nameRemoveCustomer:string;



  constructor(private customerService: CustomerService,
              private customerTypeService:CustomerTypeService) {
    this.getAllCustomer();
    this.getAllCustomerType();
  }

  ngOnInit(): void {
  }

  getAllCustomer() {
    return this.customerService.getAll().subscribe(next => {
      this.customerList = next;
    }, error => {

    })
  }

  getAllCustomerType(){
    return this.customerTypeService.getAll().subscribe(next=>{
      this.customerTypeList = next;
    })
  }

  customerRemove(id: number, name: string) {
    this.idRemoveCustomer = id;
    this.nameRemoveCustomer = name;

  }

  remove(idRemoveCustomer: number) {
    this.customerService.remove(idRemoveCustomer).subscribe(next=>{
      this.getAllCustomer();
    });

  }

   searchCustomer(nameCustomer: string, emailCustomer: string, customerType: string) {
    this.customerService.searchCustomer(nameCustomer,emailCustomer,customerType).subscribe(next=>{
      this.customerList = next;

    })
  }
}
