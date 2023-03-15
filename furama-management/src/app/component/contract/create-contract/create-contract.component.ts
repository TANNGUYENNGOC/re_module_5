import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, ValidatorFn} from "@angular/forms";
import {CustomerService} from "../../../service/customer/customer.service";
import {FacilityService} from "../../../service/facility/facility.service";
import {EmployeeService} from "../../../service/employee/employee.service";
import {Customer} from "../../../model/customer";
import {Employee} from "../../../model/employee";
import {Facility} from "../../../model/facility";
import {Contract} from "../../../model/contract";
import {ContractService} from "../../../service/contract/contract.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  formCreateContract: FormGroup;
  listCustomer: Customer [] = [];
  listEmployee: Employee [] = [];
  listFacility: Facility [] = [];

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private employeeService: EmployeeService,
              private contractService: ContractService,
              private router: Router,
              private toast:ToastrService) {
  }

  ngOnInit(): void {
    this.formCreateContract = new FormGroup({
      startDate: new FormControl("", [Validators.required]),
      endDate: new FormControl("", [Validators.required]),
      deposit: new FormControl("", [Validators.min(10), Validators.required]),
      employee: new FormControl("", [Validators.required]),
      customer: new FormControl("", Validators.required),
      facility: new FormControl("", [Validators.required])
    });
    this.getAllCustomer();
    this.getAllEmployee();
    this.getFacility();
  }

  getAllCustomer() {
    return this.customerService.getAll().subscribe(next => {
      this.listCustomer = next;
    })
  }

  getAllEmployee() {
    return this.employeeService.getAll().subscribe(next => {
      this.listEmployee = next;
    })
  }

  getFacility() {
    return this.facilityService.getAll().subscribe(next => {
      this.listFacility = next;
    })
  }

  createContract() {
    if (this.formCreateContract.valid) {
      let contract: Contract = this.formCreateContract.value;
      this.contractService.save(contract).subscribe(next => {
        this.formCreateContract.reset();
        this.toast.success("Thêm mới thành công","Thêm mới");
        this.router.navigateByUrl("contract/list");
      })
    } else {
      this.toast.success("Thêm mới mới thành công","Thêm mới");
      this.router.navigateByUrl("contract/list");
    }
  }
}
