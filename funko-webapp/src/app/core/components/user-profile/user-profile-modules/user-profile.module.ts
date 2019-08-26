import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../../../modules/angular-material.module';
import { UserProfileComponent } from '../user-profile.component';
import { UserRoutingProfileModule } from './user-profile-routing.module';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { PrivacySettingCardComponent } from '../privacy-setting-card/privacy-setting-card.component';
import { AccountSettingCardComponent } from '../account-setting-card/account-setting-card.component';



@NgModule({
  declarations: [UserProfileComponent, ProfileCardComponent, PrivacySettingCardComponent, AccountSettingCardComponent],
  imports: [CommonModule, AngularMaterialModule, FormsModule, UserRoutingProfileModule]
})

export class UserProfileModule { }
