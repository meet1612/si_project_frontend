import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';

const arr: Routes = [
  { path: '', component: LoginComponent },
  {path: 'forgetpassword', component:ForgetpasswordComponent},
  {path:'signup',component:SignupComponent},
  {path:'product',component:ProductComponent},
  {path:'viewproduct/:id',component:ViewProductComponent},
  {path:'changepass',component:ChangepassComponent},
  {path:'profile',component:ProfileComponent},
  {path:'editprofile',component:EditprofileComponent}
];
export const routing = RouterModule.forRoot(arr);
