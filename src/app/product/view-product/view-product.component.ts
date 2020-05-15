import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  P_id: number;
  FK_Cat_id: number;
  P_name: string = "";
  P_price: number;
  P_mfg: string = "";
  P_soh: number;
  P_img: string = "";
  P_color: string = "";
  P_desc: string = "";
  id: number;
  prod: Product[] = [];
  c_id: number;
  p_id: number;
  constructor(private _send: Router, private _acroute: ActivatedRoute, private _data: ProductService) { }

  ngOnInit() {
    this._acroute.params.subscribe((data: Params) => {
      this.id = data["id"];
    });
    console.log(this.id);
    this._data.getProductById(this.id).subscribe((data: Product[]) => {
      console.log(data);
      this.c_id = data[0].FK_Cat_id;
      this.p_id = data[0].P_id;
      this.P_img = data[0].P_img;
      this.P_id = data[0].P_id;
      this.P_name = data[0].P_name;
      this.P_price = data[0].P_price;
      this.P_mfg = data[0].P_mfg;
      this.P_soh = data[0].P_soh;
      this.P_color = data[0].P_color;
      this.P_desc = data[0].P_desc;

      this._data
        .getProductByCatId(this.c_id, this.id)
        .subscribe((data: Product[]) => {
          console.log(data);
          this.prod = data;
        });
    });
  }
  onView(item: Product) {
    this.id = item.P_id;
    this._data.getProductById(this.id).subscribe((data: Product[]) => {
      console.log(data);
      this.c_id = data[0].FK_Cat_id;
      this.p_id = data[0].P_id;
      this.P_img = data[0].P_img;
      this.P_id = data[0].P_id;
      this.P_name = data[0].P_name;
      this.P_price = data[0].P_price;
      this.P_mfg = data[0].P_mfg;
      this.P_soh = data[0].P_soh;
      this.P_color = data[0].P_color;
      this.P_desc = data[0].P_desc;

      this._data
        .getProductByCatId(this.c_id, this.id)
        .subscribe((data: Product[]) => {
          console.log(data);
          this.prod = data;
        });
    });
  }
  onBuy() {
    this._send.navigate(['/buyproduct', this.P_id]);
  }
  onWhishlist() {
    alert("Added Your item to Whishlist");
  }
}
