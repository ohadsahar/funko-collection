import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../../../modules/angular-material.module';
import { AccountSettingCardComponent } from '../account-setting-card/account-setting-card.component';
import { PrivacySettingCardComponent } from '../privacy-setting-card/privacy-setting-card.component';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { MainMenuComponent } from '../profile-main-menu/main-menu.component';
import { UserProfileComponent } from '../user-profile.component';
import { UserRoutingProfileModule } from './user-profile-routing.module';
@NgModule({
  declarations: [UserProfileComponent, ProfileCardComponent, PrivacySettingCardComponent, AccountSettingCardComponent, MainMenuComponent],
  imports: [CommonModule, UserRoutingProfileModule, AngularMaterialModule, FormsModule]
})
export class UserProfileModule { }
