import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FreezeAccountDialogComponent } from '../../../shared/dialogs/freeze-account-dialog/freeze-account-dialog.component';
import { ShutdownAccountDialogComponent } from '../../../shared/dialogs/shutdown-account-dialog/shutdown-account-dialog.component';
import { PrivacySettings } from '../../../shared/interfaces/privacy-settings.interface';
import { RegisterInterface } from '../../../shared/interfaces/register.interface';
import { LoginService } from '../../services/login.service';
import { MessageService } from '../../services/message.service';
import { ShareDataService } from '../../services/share-data.service';
import { UserProfileDataService } from '../../services/user-profile-data.service';
import { UserProfileSettingService } from '../../services/user-profile-settings.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  email: string;
  favoritePop: string;
  age: number;
  freezeAccount: boolean;
  shutdownAccount: boolean;
  userData: RegisterInterface;
  backupUserData: RegisterInterface;
  editAble: boolean;
  privacySettings: PrivacySettings = new PrivacySettings(null, false, false, false, false, false, false);
  constructor(private loginService: LoginService, private messageService: MessageService,
    private shareDataService: ShareDataService, private userProfileSettingService: UserProfileSettingService,
    private userProfileDataService: UserProfileDataService, private dialog: MatDialog) {
    this.editAble = false;

  }

  ngOnInit() {
    this.onLoadComponent();
  }
  onLoadComponent() {
    this.loginService.getUserDataByToken().subscribe(response => {
      this.userData = response.message;
      this.userProfileSettingService.createPrivacySettings(this.privacySettings).subscribe(() => {
      });
      this.userProfileSettingService.getPrivacySettings().subscribe(data => {
        this.privacySettings = data.message;
      });
      this.shareDataService.changeUser(this.userData);
    }, (error) => {
      this.messageService.failedMessage(error);
    });
  }
  updateProfile() {
    this.userProfileDataService.updateUserData(this.userData).subscribe(() => {
    }, (error) => {
      this.messageService.failedMessage(JSON.stringify(error));
    });
  }
  beforeEdit() {
    this.backupUserData = Object.assign({}, this.userData);
  }
  cancelEdit() {
    this.userData.email = this.backupUserData.email;
    this.userData.favoritePop = this.backupUserData.favoritePop;
    this.userData.firstname = this.backupUserData.firstname;
    this.userData.lastname = this.backupUserData.lastname;
    this.userData.numberOfPops = this.backupUserData.numberOfPops;
  }
  updateSettings() {
    this.userProfileSettingService.updatePrivacySettings(this.privacySettings).subscribe(response => {
      this.privacySettings = response.message;
      this.messageService.successMessage('הגדרות עודכנו בהצלחה');
    }, (error) => {
      this.messageService.failedMessage(JSON.stringify(error));
    });
  }
  freezeAccountDialog() {
    const dialog = this.dialog.open(FreezeAccountDialogComponent);
    dialog.afterClosed().subscribe(response => {
      if (response === undefined || response === false) {
        this.freezeAccount = false;
      }
    });
  }
  shutDownAccountDialog() {
    const dialog = this.dialog.open(ShutdownAccountDialogComponent);
    dialog.afterClosed().subscribe(response => {
      if (response === undefined || response === false) {
        this.shutdownAccount = true;
      }
    });
  }
}
