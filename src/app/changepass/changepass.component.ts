import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Customer } from '../login/customer';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  Email_Id: string;
  Password: string;
  Pass1: string;
  Pass2: string;
  id: string;
  arr: Customer[] = [];
  constructor(private _data: LoginService, private _send: Router) { }

  ngOnInit() {
    this.Email_Id = localStorage.getItem('email');
    this._data.getCustomerById(this.Email_Id).subscribe(
      (data: any[]) => {
        this.arr = data;
      }
    );
  }
  onSave() {
    if ((this.Password == this.arr[0].Password) && (this.Pass1 == this.Pass2)) {
      this._data.changepass(new Customer(this.Email_Id, this.Pass1)).subscribe(
        (data: any) => {
          alert("Password Change Successfully");
          this._send.navigate(['/profile']);
        }
      );
    }
    else {
      alert("Invalid Password");
    }
  }
  onCancel() {
    this._send.navigate(['/profile']);
  }
}
