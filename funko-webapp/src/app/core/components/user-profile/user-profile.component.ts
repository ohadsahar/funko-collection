import { Component, OnInit } from '@angular/core';
import { PrivacySettings } from '../../../shared/interfaces/privacy-settings.interface';
import { RegisterInterface } from '../../../shared/interfaces/register.interface';
import { LoginService } from '../../services/login.service';
import { MessageService } from '../../services/message.service';
import { ShareDataService } from '../../services/share-data.service';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  email: string;
  favoritePop: string;
  age: number;
  userData: RegisterInterface;
  privacySettings: PrivacySettings = new PrivacySettings(null, false, false, false, false, false, false);
  constructor(private loginService: LoginService, private messageService: MessageService,
              private shareDataService: ShareDataService, private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.onLoadComponent();
  }
  onLoadComponent() {
    this.loginService.getUserDataByToken().subscribe(response => {
      this.userData = response.message;
      this.userProfileService.createPrivacySettings(this.privacySettings).subscribe(() => {
        this.messageService.successMessage('התחברת בהצלחה, מיד תועבר');
      });
      this.userProfileService.getPrivacySettings().subscribe(data => {
        this.privacySettings = data.message;
      });
      this.shareDataService.changeUser(this.userData);
    }, (error) => {
      this.messageService.failedMessage(error);
    });
  }
  updateSettings() {
    this.userProfileService.updatePrivacySettings(this.privacySettings).subscribe(response => {
      this.privacySettings = response.message;
      this.messageService.successMessage('הגדרות עודכנו בהצלחה');
    }, (error) => {
      this.messageService.failedMessage(JSON.stringify(error));
    });
  }
}
