import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from "@angular/forms";
import {DemoModule} from "./demo/demo.module";

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        DemoModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
