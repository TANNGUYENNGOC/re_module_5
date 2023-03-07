import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "./component/customer/list-customer/list-customer.component";
import {HomeComponent} from "./component/home/home.component";
import {CreateCustomerComponent} from "./component/customer/create-customer/create-customer.component";
import {UpdateCustomerComponent} from "./component/customer/update-customer/update-customer.component";


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"customer/list",component: ListCustomerComponent},
  {path:"customer/create",component:CreateCustomerComponent},
  {path:"customer/update/:id",component:UpdateCustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
