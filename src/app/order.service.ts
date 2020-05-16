import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Order } from "./order/order";
import { Product } from "./product/product";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  private order_url: string = "http://localhost:3000/order/";
  constructor(private _http: HttpClient) {}
  addOrder(item: Order) {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.order_url,body,{headers:head1});
  }
  updateOrder(soh:number,item:Product){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.order_url+soh,body,{headers:head1});
  }
  getOrderByCustId(id:string){
    return this._http.get(this.order_url+id);
  }
  getOrderId(){
    return this._http.get("http://localhost:3000/orderlimit/");
  }
  getMyOrderByJoin(id:string){
    return this._http.get("http://localhost:3000/myorder/"+id);
  }
}
