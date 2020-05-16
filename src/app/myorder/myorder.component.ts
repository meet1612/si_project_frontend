import { Component, OnInit } from '@angular/core';
import { Order_Product } from './order_product';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {
  order_productarr:Order_Product[]=[];
  id:string;
  O_date:Date;
  constructor(private _data:OrderService) { }

  ngOnInit() {
    this.id=localStorage.getItem('email');
    this._data.getMyOrderByJoin(this.id).subscribe(
      (data:Order_Product[])=>{
        this.order_productarr=data;
      }
    );
  }
}
