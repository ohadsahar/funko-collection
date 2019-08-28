
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { UserAccountSettingComponent } from '../user-account-settings.component';


const routes: Routes = [{ path: 'account', component: UserAccountSettingComponent },
{ path: 'account/change-password', component: ChangePasswordComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountRoutingModule { }
