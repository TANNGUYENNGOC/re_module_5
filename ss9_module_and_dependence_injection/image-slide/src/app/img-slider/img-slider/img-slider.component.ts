import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  num : number = 1;
  color : string = "red";
  constructor() { }

  ngOnInit(): void {
  }


  next() {
    this.num ++;
    this.color = "blue";
  }

  previous() {
    this.num --;
    this.color = "red";
  }
}
