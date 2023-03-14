import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product [] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.productService.getAll().subscribe(next => {
      this.productList = next;
    })
  }

  remove(id: number) {
    if (confirm("Bạn có muốn xóa không???")) {
      this.productService.remove(id).subscribe(next=>{
      this.getAll();
      });
    } else {
      alert("ừ thì không xóa");
    }
  }


}
