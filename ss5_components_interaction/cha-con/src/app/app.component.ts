import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cha-con';
  so:number = 10;
  age:number = 21;
  tang() {
    this.so++;
  }

  giam() {
    this.so--;
  }
}
