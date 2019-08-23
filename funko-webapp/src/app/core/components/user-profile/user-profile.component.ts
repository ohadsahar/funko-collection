import { Component, OnInit } from '@angular/core';
import { PrivacySettings } from '../../../shared/interfaces/privacy-settings.interface';
import { RegisterInterface } from '../../../shared/interfaces/register.interface';
import { LoginService } from '../../services/login.service';
import { MessageService } from '../../services/message.service';
import { ShareDataService } from '../../services/share-data.service';

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
  privacySettings: PrivacySettings = new PrivacySettings(false, false, false, false, false, false);
  constructor(private loginService: LoginService, private messageService: MessageService,
              private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.loginService.getUserDataByToken().subscribe(response => {
      this.userData = response.message;
      this.privacySettings.showCollection = true;
      this.privacySettings.showPersonalData = true;
      this.privacySettings.canSendMessage = false;
      this.privacySettings.friendShowCollection = false;
      this.privacySettings.friendShowPersonalData = true;
      this.privacySettings.friendCanSendMessage = true;
      this.shareDataService.changeUser(this.userData);

    }, (error) => {
      this.messageService.failedMessage(error);
    });
  }

  updateSettings() {
    console.log(this.privacySettings);
  }

}
