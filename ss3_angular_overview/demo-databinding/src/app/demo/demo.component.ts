import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  name: string;
  colorSelect: string;
  tuong: string;
  size:number = 10;
  image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKpnBTG-wfGokwVNf-yRGKiNVzXd8tF9cygBOb1g4&s';

  constructor() {
    this.tuong = 'zed';
  }

  ngOnInit(): void {
  }

  sizeInput(value: string) {

    this.size = parseInt(value);
  }
}
