import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Customer } from './customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email_Id: string;
  Password: string;

  constructor(private _send: Router, private _data: LoginService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this._data.CustomerLogin(new Customer(this.Email_Id,this.Password)).subscribe(
      (data:Customer[])=>{
          if(data.length>0){
            alert("Login Successfully..!!");
            this._send.navigate(['/product']);
            localStorage.setItem('email',data[0].Email_Id);
            //localStorage.setItem('username',data[0].Username);
          }
          else{
            alert("Id and Password doesn't match");
          }
      }
    );
   }
  onClickup() {
    this._send.navigate(['/signup']);
  }
  onForget() {
    this._send.navigate(['/forgetpassword']);
  }
}
