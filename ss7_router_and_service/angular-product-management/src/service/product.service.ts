import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient:HttpClient) { }

  URL = "http://localhost:3000/products";
  getAll():Observable<any> {
    return this.httpClient.get<Product[]>(this.URL);
  }

  saveProduct(product: Product):Observable<any> {
    return  this.httpClient.post(this.URL,product);
  }

  findById(id:number) : Observable<any>{
    return this.httpClient.get<Product>(this.URL+"/"+id);
  }


  remove(id:number) : Observable<any>{
    return this.httpClient.delete(this.URL+"/"+id);
  }

  update(id:number, product:Product) :Observable<any>{
    return this.httpClient.patch(this.URL+"/"+id,product);
  }


}
