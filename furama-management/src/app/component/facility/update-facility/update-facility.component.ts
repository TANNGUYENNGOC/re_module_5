import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../../service/facility/facility.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RentTypeService} from "../../../service/facility/rent-type.service";
import {FacilityTypeService} from "../../../service/facility/facility-type.service";
import {FacilityType} from "../../../model/facility-type";
import {RentType} from "../../../model/rent-type";
import {Customer} from "../../../model/customer";
import {Facility} from "../../../model/facility";

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
              private facilityTypeService: FacilityTypeService,
              private router:Router) {
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
      id: new FormControl("",[Validators.required]),
      name: new FormControl("",[Validators.required]),
      img: new FormControl(),
      area: new FormControl("",[Validators.required]),
      cost: new FormControl("",[Validators.required]),
      maxPeople: new FormControl("",[Validators.required]),
      rentType: new FormControl("",[Validators.required]),
      facilityType: new FormControl("",[Validators.required]),
      standardRoom: new FormControl("",[Validators.required]),
      descriptionOtherConvenience: new FormControl("",[Validators.required]),
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

  updateFacility() {
    if(this.formUpdateFacility.valid){
      let facility:Facility = this.formUpdateFacility.value;
      this.facilityService.update(facility.id,facility).subscribe(next=>{
        alert("Chỉnh sửa thành công");
        this.router.navigateByUrl("customer/list");
      })
    } else {
      alert("Chỉnh sửa thành công");
      this.router.navigateByUrl("customer/list");
    }
  }
}
