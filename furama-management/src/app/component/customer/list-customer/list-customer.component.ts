import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerService} from "../../../service/customer/customer.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer [] = [];
  p: number;
  idRemoveCustomer:number;
  nameRemoveCustomer:string;

  constructor(private customerService: CustomerService) {
    this.getAllCustomer();
  }

  ngOnInit(): void {
  }

  getAllCustomer() {
    return this.customerService.getAll().subscribe(next => {
      this.customerList = next;
    }, error => {

    })
  }


  customerRemove(id: number, name: string) {
    this.idRemoveCustomer = id;
    this.nameRemoveCustomer = name;

  }

  remove(idRemoveCustomer: number) {
    this.customerService.delete(idRemoveCustomer).subscribe(next=>{
      this.getAllCustomer();
    });

  }
}
