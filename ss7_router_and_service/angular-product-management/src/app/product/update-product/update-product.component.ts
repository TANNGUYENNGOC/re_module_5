import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productFormUpdate: FormGroup;
  id:number;
  product:Product;

  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductService,
              private router:Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(next=>{
      this.id = parseInt(next.get('id'));

      this.product = this.productService.findById(this.id);
      this.productFormUpdate = new FormGroup({
        id: new FormControl(this.product.id),
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description),
      });
    });
    console.log(this.product);


  }

  update() {
    let productUpdate = this.productFormUpdate.value;
    this.productService.update(productUpdate.id,productUpdate);
    this.router.navigateByUrl("/product/list");
  }
}
