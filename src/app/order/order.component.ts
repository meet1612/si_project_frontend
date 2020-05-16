import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private _send:Router) { }

  ngOnInit(): void {
  }
  onBack(){
    this._send.navigate(['/product']);
  }
}
