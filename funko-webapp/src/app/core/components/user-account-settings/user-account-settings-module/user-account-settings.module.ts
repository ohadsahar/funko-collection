import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AccountSettingMainMenuComponent } from '../account-setting-main-menu/account-setting-main-menu.component';
import { AccountSettingRecoverySettingsComponent } from '../account-setting-recovery-settings/account-setting-recovery-settings.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { UserAccountSettingComponent } from '../user-account-settings.component';
import { UserAccountRoutingModule } from './user-account-settings-routing.module';



@NgModule({
  declarations: [UserAccountSettingComponent, AccountSettingMainMenuComponent, AccountSettingRecoverySettingsComponent,
    ChangePasswordComponent],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class UserAccountSettingModule { }
