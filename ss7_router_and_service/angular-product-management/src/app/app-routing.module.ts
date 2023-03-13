import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {CreateProductComponent} from "./product/create-product/create-product.component";
import {UpdateProductComponent} from "./product/update-product/update-product.component";


const routes: Routes = [
  {path: "product/list", component: ProductListComponent},
  {path: "product/create", component: CreateProductComponent},
  {path: "product/update/:id", component: UpdateProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
