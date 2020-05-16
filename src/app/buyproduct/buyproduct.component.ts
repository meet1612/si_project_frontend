import { Component, OnInit } from '@angular/core';
import { Product } from 'si-demoProject/src/app/product/product';
import { OrderService } from '../order.service';
import { Order } from '../order/order';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {
  P_id: number;
  FK_Cat_id: number;
  P_name: string = "";
  P_price: number;
  P_mfg: string = "";
  P_soh: number;
  P_img: string = "";
  P_color: string = "";
  P_desc: string = "";
  P_soh1: number = 1;
  id: number;
  FK_P_id: number;
  FK_Email_id: string;
  O_id: number;
  noarr: number[] = [];
  orderarr: Order[] = [];
  i: number;
  O_amount: number;
  O_status: string = "pending";
  arr: Product[] = [];
  constructor(private _data1: OrderService, private _send: Router, private _acroute: ActivatedRoute, private _data: ProductService) { }

  ngOnInit() {
    this._acroute.params.subscribe((data: Params) => {
      this.id = data["id"];
    });
    console.log(this.id);
    this._data.getProductById(this.id).subscribe((data: Product[]) => {
      console.log(data);
      this.arr = data;
      this.P_img = data[0].P_img;
      this.P_id = data[0].P_id;
      this.P_name = data[0].P_name;
      this.P_price = data[0].P_price;
      this.P_mfg = data[0].P_mfg;
      this.P_color = data[0].P_color;
      this.P_desc = data[0].P_desc;
      this.P_soh = data[0].P_soh;
      this.FK_P_id = data[0].P_id;
      for (this.i = 1; this.i <= this.P_soh; this.i++) {
        this.noarr.push(this.i);
      }
    }
    );

  }
  onOrder() {
    this.O_amount = this.P_price * this.P_soh1;
    this.P_soh = this.P_soh - this.P_soh1;
    this._data1.getOrderId().subscribe(
      (data: any) => {
        this.O_id = data[0].O_id;
        this.O_id = this.O_id + 1;
        this._data1.updateOrder(this.P_soh, this.arr[0]).subscribe(
          (data: Product[]) => {
            this._data1.addOrder(new Order(this.O_id, this.O_amount, this.FK_P_id, localStorage.getItem('email'),this.O_status)).subscribe(
              (data: Order[]) => {
                console.log(data);
                this._send.navigate(['/order', this.P_id]);
              }
            );
          }
        );
      }
    );
  }
}
