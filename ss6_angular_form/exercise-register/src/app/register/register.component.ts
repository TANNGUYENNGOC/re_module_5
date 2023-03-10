import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Register} from '../model/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister:FormGroup;
  listRegister: Register [] = [];
  countryList:string [] = ["Vietnamese","USA","English","China","Japan","Korea"]
  constructor() { }

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl("",[this.checkPass,Validators.required]),
      country: new FormControl("",[Validators.required]),
      age: new FormControl("",[Validators.required,Validators.min(18)]),
      gender: new FormControl("",[Validators.required]),
      phone: new FormControl("",[Validators.required,Validators.pattern(" /^\\+84\\d{9,10}$/")])
    },
      {validators: this.checkPass}
    )

  }

  checkPass(control:AbstractControl){
    let checkForm = control.value;
    if (!(checkForm.password === checkForm.confirmPassword)){
      return {"passErrors": true};
    }
    return null;
  }

  // checkPass(control: AbstractControl):{passErrors: boolean} {
  //   return control.value.password === control.value.confirmPassword ?
  //     {passErrors: false} : {passErrors: true};
  // }
  create() {
    let register = this.formRegister.value;
    this.listRegister.push(register);
  }
}
