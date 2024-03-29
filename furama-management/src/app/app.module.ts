import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { FootterComponent } from './component/footter/footter.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { UpdateCustomerComponent } from './component/customer/update-customer/update-customer.component';
import { ListFacilityComponent } from './component/facility/list-facility/list-facility.component';
import { CreateFacilityComponent } from './component/facility/create-facility/create-facility.component';
import { UpdateFacilityComponent } from './component/facility/update-facility/update-facility.component';
import { CreateContractComponent } from './component/contract/create-contract/create-contract.component';
import { ListContractComponent } from './component/contract/list-contract/list-contract.component';
import { ListEmployeeComponent } from './component/employee/list-employee/list-employee.component';
import { UpdateContractComponent } from './component/contract/update-contract/update-contract.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FootterComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    ListFacilityComponent,
    CreateFacilityComponent,
    UpdateFacilityComponent,
    CreateContractComponent,
    ListContractComponent,
    ListEmployeeComponent,
    UpdateContractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
