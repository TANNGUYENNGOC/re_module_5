import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(fistNumber: string, secondNumber: string, operand: string) {
    if (operand == "+") {
      this.result = parseInt(fistNumber) + parseInt(secondNumber);
    } else if (operand == "-"){
      this.result = parseInt(fistNumber) - parseInt(secondNumber);
    }else if (operand == "*"){
      this.result = parseInt(fistNumber) * parseInt(secondNumber);
    }else {
      this.result = parseInt(fistNumber) / parseInt(secondNumber);
    }
      }
}
