import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from "./todo/todo.component";
import {UpdateComponent} from "./update/update.component";


const routes: Routes = [
  {path: 'listTodo' ,component : TodoComponent},
  {path: 'update/:id' ,component : UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
