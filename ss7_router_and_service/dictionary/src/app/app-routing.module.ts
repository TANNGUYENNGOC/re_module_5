import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaPageComponent} from "./dictiona-page/dictiona-page.component";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";


const routes: Routes = [
  {path:"",component:DictionaPageComponent},
  {path:"dictionary/detail/:word",component:DictionaryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
