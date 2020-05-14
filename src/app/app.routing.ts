import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { SignupComponent } from './signup/signup.component';

const arr: Routes = [
  { path: '', component: LoginComponent },
  {path: 'forgetpassword', component:ForgetpasswordComponent},
  {path:'signup',component:SignupComponent}
];
export const routing = RouterModule.forRoot(arr);
