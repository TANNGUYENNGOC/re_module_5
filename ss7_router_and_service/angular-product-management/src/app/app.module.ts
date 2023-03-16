import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UpdateProductComponent} from './product/update-product/update-product.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductModule} from "./product/product.module";
import {SharedModule} from "./shared/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
