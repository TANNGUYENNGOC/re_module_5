import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  result: number = 10;
  errors: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(fistNumber: string, secondNumber: string, operand: string) {
    if (operand === "+") {
      this.result = parseInt(fistNumber) + parseInt(secondNumber);
    } else if (operand === "-"){
      this.result = parseInt(fistNumber) - parseInt(secondNumber);
    }else if (operand === "*"){
      this.result = parseInt(fistNumber) * parseInt(secondNumber);
    }else {
      if(secondNumber==="0"){
       return this.errors = "Không thể chia cho 0";
      }
      this.result = parseInt(fistNumber) / parseInt(secondNumber);

    }
      }
}
