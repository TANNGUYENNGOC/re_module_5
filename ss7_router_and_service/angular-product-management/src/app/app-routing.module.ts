import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductModule} from "./product/product.module";


const routes: Routes = [
  {
    path: 'product', loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  // {path: 'list', loadChildren: () => import('./product/product.module').then(module => module.ProductModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
