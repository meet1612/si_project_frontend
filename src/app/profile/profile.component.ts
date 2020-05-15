import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Customer } from '../login/customer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Email_Id: string;
  Username: string;
  Gender: string;
  Age: number;
  Mobile: string;
  City: string;
  Address: string;
  id: string;
  constructor(private _data: LoginService, private _send: Router) { }

  ngOnInit() {
    this.id = localStorage.getItem('email');
    this._data.getCustomerById(this.id).subscribe(
      (data: Customer[]) => {
        this.Email_Id = data[0].Email_Id;
        this.Username = data[0].Username;
        this.Gender = data[0].Gender;
        this.Age = data[0].Age;
        this.Mobile = data[0].Mobile;
        this.City = data[0].City;
        this.Address = data[0].Address;
      }
    );
  }
  onChange() {
    this._send.navigate(['/changepass']);
  }
  onEdit() {
    this._send.navigate(['/editprofile']);
  }
  onLogout() {
    this._send.navigate(['']);
  }

}
