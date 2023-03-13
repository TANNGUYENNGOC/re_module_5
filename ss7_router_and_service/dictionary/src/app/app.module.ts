import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaPageComponent } from './dictiona-page/dictiona-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaPageComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
