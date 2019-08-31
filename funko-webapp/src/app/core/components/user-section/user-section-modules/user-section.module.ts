import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FreezeAccountDialogComponent } from '../../../../shared/dialogs/freeze-account-dialog/freeze-account-dialog.component';
import { ShutdownAccountDialogComponent } from '../../../../shared/dialogs/shutdown-account-dialog/shutdown-account-dialog.component';
import { UserCollectionComponent } from '../user-collection/user-collection.component';
import { UserFunkoWallComponent } from '../user-funko-wall/user-funko-wall.component';
import { MainMenuComponent } from '../user-main-menu/main-menu.component';
import { AccountSettingCardComponent } from '../user-profile/account-setting-card/account-setting-card.component';
import { PrivacySettingCardComponent } from '../user-profile/privacy-setting-card/privacy-setting-card.component';
import { ProfileCardComponent } from '../user-profile/profile-card/profile-card.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserSectionAngularMaterialModule } from './user-section-angular-material.module';
import { UserSectionRoutingModule } from './user-section-routing.module';
@NgModule({
  declarations: [UserProfileComponent, ProfileCardComponent, PrivacySettingCardComponent, MainMenuComponent,
    AccountSettingCardComponent, UserFunkoWallComponent, UserCollectionComponent,
    FreezeAccountDialogComponent, ShutdownAccountDialogComponent],
  imports: [CommonModule, UserSectionRoutingModule, UserSectionAngularMaterialModule, FormsModule, ReactiveFormsModule],
  entryComponents: [FreezeAccountDialogComponent, ShutdownAccountDialogComponent]
})
export class UserSectionModule { }
