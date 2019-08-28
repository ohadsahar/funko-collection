
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { UserAccountSettingComponent } from '../user-account-settings.component';
import { AccountSettingRecoverySettingsComponent } from '../account-setting-recovery-settings/account-setting-recovery-settings.component';


const routes: Routes = [{ path: 'account', component: UserAccountSettingComponent },
{ path: 'account/change-password', component: ChangePasswordComponent},
{ path: 'account/block-users', component: AccountSettingRecoverySettingsComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountRoutingModule { }
