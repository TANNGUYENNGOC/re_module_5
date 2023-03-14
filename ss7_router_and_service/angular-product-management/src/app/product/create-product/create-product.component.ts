import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/category";
import {Product} from "../../../model/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  listCategory: Category [] = [];

  productFormCreate: FormGroup;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
  }

   ngOnInit(): void {
    this.productFormCreate = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    })
     this.getAllCategory();
  }

  submit() {
    let product: Product = this.productFormCreate.value;
    this.productService.saveProduct(product).subscribe(next=>{
      this.productFormCreate.reset();
      this.router.navigateByUrl("product/list");
    })
  }

  getAllCategory() {
    return this.categoryService.getAll().subscribe(next=>{
      this.listCategory = next;
      console.log(this.listCategory);
    });

  }

}
