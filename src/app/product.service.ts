import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product_url: string = "http://localhost:3000/product/";
  private procate_url:string = "http://localhost:3000/probycat/";
  constructor(private _http: HttpClient) { }
  getAllProduct() {
    return this._http.get(this.product_url);
  }
  getProductById(id: number) {
    return this._http.get(this.product_url + id);
  }
  getProductByCat(name: string) {
    return this._http.get(this.procate_url + name);
  }
  getProductByCatId(c_id: number, p_id: number) {
    return this._http.get("http://localhost:3000/probycatid/" + c_id + "/" + p_id);
  }
}
