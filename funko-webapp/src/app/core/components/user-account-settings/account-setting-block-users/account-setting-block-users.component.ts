import { Component, OnInit } from '@angular/core';
import { BlockedUsers } from 'src/app/shared/interfaces/blocked-users.interface';

@Component({
  selector: 'app-account-setting-block-users',
  templateUrl: './account-setting-block-users.component.html',
  styleUrls: ['./account-setting-block-users.component.scss']
})
export class AccountSettingRecoverySettingsComponent implements OnInit {

  blockedUsers: BlockedUsers[];
  constructor() {
    this.blockedUsers = [];
  }
  ngOnInit() {
    this.onLoadComponent();
  }
  onLoadComponent() {

  }
}
