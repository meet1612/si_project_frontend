import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Customer } from '../login/customer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Email_Id: string;
  Password: string;
  Username: string;
  rbtn1: string = "male";
  Age: number;
  Mobile: string;
  City: string;
  Address: string;

  constructor(private _receive: ActivatedRoute, private _send: Router, private _data: LoginService) { }

  ngOnInit(): void {
    this._receive.snapshot;
  }
  onSignup() {
    this._data.CustomerSignup(new Customer(this.Email_Id, this.Password, this.Username, this.rbtn1, this.Age, this.Mobile, this.City, this.Address)).subscribe(
      (data: any) => {
        alert("successfully added");
        this._send.navigate(['']);
      }
    );
  }
  onBack() {
    this._send.navigate(['']);
  }
}
