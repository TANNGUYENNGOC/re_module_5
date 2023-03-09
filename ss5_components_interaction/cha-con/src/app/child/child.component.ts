import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input()
  so: number = 0;
  @Input()
  age: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const property in changes){
      if (property === 'so'){
        console.log('trước', changes[property].previousValue);
        console.log('hiện tại', changes[property].currentValue);
        console.log('sau mà bằng false thì tức là giá trị đã từng đc thay đổi', changes[property].firstChange);
      }
    }
  }

}
