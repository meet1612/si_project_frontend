import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from './category';
import { CatPro } from './catpro';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  P_img: string = "";
  P_name: string;
  P_price: number;
  P_mfg: number;
  P_id: number;
  name: string;
  prod1: Product[] = [];
  cat_arr: Category[] = [];
  catpro_arr: CatPro[] = [];

  constructor(private _data: ProductService, private _send: Router, private _data1: CategoryService) { }

  ngOnInit() {
    this._data.getAllProduct().subscribe(
      (data: Product[]) => {
        this.prod1 = data;
      }
    );
    this._data1.getAllCat().subscribe(
      (data: Category[]) => {
        console.log(data);
        this.cat_arr = data;
      }
    );
  }
  onView(item: Product) {
    this._send.navigate(['/viewproduct', item.P_id]);
  }
  onclickcat(Cat_name: string) {
    this._data.getProductByCat(Cat_name).subscribe(
      (data: CatPro[]) => {
        this.prod1 = data;
      }
    );
  }
}
