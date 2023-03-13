import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../../../service/facility/facility.service";
import {ActivatedRoute} from "@angular/router";
import {RentTypeService} from "../../../service/facility/rent-type.service";
import {FacilityTypeService} from "../../../service/facility/facility-type.service";
import {FacilityType} from "../../../model/facility-type";
import {RentType} from "../../../model/rent-type";
import {Customer} from "../../../model/customer";

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {
  formUpdateFacility: FormGroup;
  listFacilityType: FacilityType [] = [];
  listRentType: RentType [] = [];

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService) {
    this.activatedRoute.paramMap.subscribe(next => {
      let id = parseInt(next.get('id'));
      if (id != null) {
        this.facilityService.findById(id).subscribe(data => {
          this.formUpdateFacility.patchValue(data);
        })
      }
    })
  }

  ngOnInit(): void {
    this.formUpdateFacility = new FormGroup({
      id: new FormControl(),
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

    this.getAllRentType();
    this.getAllFacilityType();
  }



  getAllFacilityType() {
    return this.facilityTypeService.getAll().subscribe(next => {
      this.listFacilityType = next;
    });
  }

  getAllRentType() {
    return this.rentTypeService.getAll().subscribe(next => {
      this.listRentType = next;
    })
  }
}
