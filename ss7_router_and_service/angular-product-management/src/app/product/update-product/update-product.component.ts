import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/category";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productFormUpdate: FormGroup;
  id: number;
  product: Product;
  listCategory: Category [] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe(next => {
      this.id = parseInt(next.get('id'));
      this.productService.findById(this.id).subscribe(data => {
        this.productFormUpdate.patchValue(data);
      })
    });

    this.productFormUpdate = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });

  }

  ngOnInit(): void {
    this.getAllCategoryList();

  }

  compareWidth(o1:Product,o2:Product){
    return o1 && o2 ? o1.id  === o2.id : o1 === o2;
  }

  getAllCategoryList(){
    return this.categoryService.getAll().subscribe(next=>{
      this.listCategory = next;
    })
  }

  updateProduct(){
    let product : Product = this.productFormUpdate.value;
    return this.productService.update(product.id,product).subscribe(next=>{
      alert("Chỉnh sửa thành công");
      this.router.navigateByUrl("product/list");
    });
  }
}
