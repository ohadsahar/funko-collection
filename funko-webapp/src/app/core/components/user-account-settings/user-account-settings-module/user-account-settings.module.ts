import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { AccountSettingRecoverySettingsComponent } from '../account-setting-block-users/account-setting-block-users.component';
import { AccountSettingMainMenuComponent } from '../account-setting-main-menu/account-setting-main-menu.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { UserAccountSettingComponent } from '../user-account-settings.component';
import { UserAccountRoutingModule } from './user-account-settings-routing.module';

@NgModule({
  declarations: [UserAccountSettingComponent, AccountSettingMainMenuComponent, AccountSettingRecoverySettingsComponent,
    ChangePasswordComponent, AccountSettingRecoverySettingsComponent],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class UserAccountSettingModule { }
