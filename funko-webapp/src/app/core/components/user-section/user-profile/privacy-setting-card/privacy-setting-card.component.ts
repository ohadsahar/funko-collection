import { Component, OnInit } from '@angular/core';
import { PrivacySettings } from 'src/app/shared/interfaces/privacy-settings.interface';
import { MessageService } from '../../../../services/message.service';
import { UserProfileSettingService } from '../../../../services/user-account-settings.service';

@Component({
  selector: 'app-privacy-setting-card',
  templateUrl: './privacy-setting-card.component.html',
  styleUrls: ['../user-profile.component.scss']
})
export class PrivacySettingCardComponent implements OnInit {
  privacySettings: PrivacySettings = new PrivacySettings(null, false, false, false, false, false, false);
  constructor(private userProfileSettingService: UserProfileSettingService, private messageService: MessageService) { }
  ngOnInit() {
    this.onLoadComponent();
  }
  onLoadComponent() {
    this.userProfileSettingService.createPrivacySettings(this.privacySettings).subscribe(() => {
      this.userProfileSettingService.getPrivacySettings().subscribe(data => {
        this.privacySettings = data.message;
      });
    }, (error) => {
      this.messageService.failedMessage(error);
    });
  }
  updateSettings() {
    this.userProfileSettingService.updatePrivacySettings(this.privacySettings).subscribe(response => {
      this.privacySettings = response.message;
      this.messageService.successMessage('הגדרות עודכנו בהצלחה');
    }, (error) => {
      this.messageService.failedMessage(JSON.stringify(error));
    });
  }
}
