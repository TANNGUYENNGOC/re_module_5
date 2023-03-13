import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productFormCreate : FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  })
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productFormCreate.value;
    this.productService.saveProduct(product);
    this.productFormCreate.reset();
  }

}
