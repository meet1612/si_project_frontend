import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Customer } from 'src/app/login/customer';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  Email_Id: string;
  Password: string;
  Username: string;
  Gender: string;
  Age: number;
  Mobile: string;
  City: string;
  Address: string;
  id: string;
  constructor(private _send: Router, private _data: LoginService) { }

  ngOnInit() {
    this.id = localStorage.getItem('email');
    this._data.getCustomerById(this.id).subscribe(
      (data: Customer) => {
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
  onSave() {
    this._data.CustomerUpdate(new Customer(this.Email_Id, this.Password, this.Username, this.Gender, this.Age, this.Mobile, this.City, this.Address)).subscribe(
      (data: any) => {
        alert("successfully updated");
        this._send.navigate(['/profile']);
      }
    );
  }
}

