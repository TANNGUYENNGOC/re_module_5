import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "./component/customer/list-customer/list-customer.component";
import {HomeComponent} from "./component/home/home.component";
import {CreateCustomerComponent} from "./component/customer/create-customer/create-customer.component";


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"customer/list",component: ListCustomerComponent},
  {path:"customer/create",component:CreateCustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
