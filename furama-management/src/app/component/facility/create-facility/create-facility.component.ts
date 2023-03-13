import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../../service/facility/facility.service";
import {FacilityTypeService} from "../../../service/facility/facility-type.service";
import {RentTypeService} from "../../../service/facility/rent-type.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Facility} from "../../../model/facility";
import {Router} from "@angular/router";
import {FacilityType} from "../../../model/facility-type";
import {RentType} from "../../../model/rent-type";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  formCreateFacility: FormGroup;
  listFacilityType: FacilityType [] = [];
  listRentType: RentType [] = [];
  constructor(private facilityService:FacilityService,
              private facilityTypeService:FacilityTypeService,
              private rentTypeService:RentTypeService,
              private router:Router) { }

  ngOnInit(): void {
    this.formCreateFacility = new FormGroup({
      name: new FormControl(),
      img: new FormControl(),
      area: new FormControl(),
      cost: new FormControl(),
      maxPeople: new FormControl(),
      rentType: new FormControl(),
      facilityType: new FormControl(),
      standardRoom: new FormControl(),
      descriptionOtherConvenience: new FormControl(),
      poolArea: new FormControl(),
      numberOfFloors: new FormControl(),
      facilityFree: new FormControl(),
    });

    this.getAllFacilityType();
    this.getAllRentType();
  }

  createFacility() {
    let ffacility: Facility = this.formCreateFacility.value;
    this.facilityService.save(ffacility).subscribe(next=>{
      alert("Thêm mới thành công");
      this.router.navigateByUrl("facility/list");
    });
  }

  getAllFacilityType(){
    return this.facilityTypeService.getAll().subscribe(next=>{
      this.listFacilityType = next;
    });
  }

  getAllRentType(){
    return this.rentTypeService.getAll().subscribe(next=>{
      this.listRentType = next;
    })
  }
}
