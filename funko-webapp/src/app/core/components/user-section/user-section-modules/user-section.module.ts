import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../../../modules/angular-material.module';
import { UserCollectionComponent } from '../user-collection/user-collection.component';
import { MainMenuComponent } from '../user-main-menu/main-menu.component';
import { AccountSettingCardComponent } from '../user-profile/account-setting-card/account-setting-card.component';
import { PrivacySettingCardComponent } from '../user-profile/privacy-setting-card/privacy-setting-card.component';
import { ProfileCardComponent } from '../user-profile/profile-card/profile-card.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserSectionRoutingModule } from './user-section-routing.module';


@NgModule({
  declarations: [UserProfileComponent, ProfileCardComponent, PrivacySettingCardComponent, MainMenuComponent,
    AccountSettingCardComponent, UserCollectionComponent],
  imports: [CommonModule, UserSectionRoutingModule, AngularMaterialModule, FormsModule, ReactiveFormsModule]
})
export class UserSectionModule { }
