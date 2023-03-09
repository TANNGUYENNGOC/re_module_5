import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'con-cha';
  bienNhanGiaTri;
  hamNhanSuKien(num: number) {
    this.bienNhanGiaTri=num;
  }
}
