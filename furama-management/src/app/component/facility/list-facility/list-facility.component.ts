import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../../service/facility/facility.service";
import {Facility} from "../../../model/facility";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilityList: Facility [] = [];
  facilityRemove: Facility;
  p: number;

  constructor(private facilityService:FacilityService) {
    this.getAllFacility();

  }

  ngOnInit(): void {
  }

  getAllFacility(){
    return this.facilityService.getAll().subscribe(next=>{
        this.facilityList = next;
        console.log(this.facilityList);
    });
  }

}
