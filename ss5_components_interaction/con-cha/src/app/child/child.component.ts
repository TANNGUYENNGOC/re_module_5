import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  num:number = 5;
  @Output()
  countChanged: EventEmitter<number> = new EventEmitter<number>();

  tang(){
    this.num++;
    this.countChanged.emit(this.num);
  }
  giam(){
    this.num--;
    this.countChanged.emit(this.num);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
