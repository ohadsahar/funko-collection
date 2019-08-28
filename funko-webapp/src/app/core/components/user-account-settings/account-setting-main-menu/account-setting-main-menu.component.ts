import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-setting-main-menu',
  templateUrl: './account-setting-main-menu.component.html',
  styleUrls: ['./account-setting-main-menu.component.scss']
})
export class AccountSettingMainMenuComponent implements OnInit {

  isMobile: boolean;
  constructor(private deviceService: DeviceDetectorService, private router: Router) {
    this.isMobile = false;
  }
  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();
  }
  navigate(value: string) {
    switch (value) {
      case 'change-password':
        this.router.navigate(['account-settings/account/change-password'], { replaceUrl: true });
        break;
      case 'block-users':
        this.router.navigate(['account-settings/account/block-users'], { replaceUrl: true });
        break;
      default:
        this.router.navigate(['account-settings/account/change-password'], { replaceUrl: true });
        break;
    }
  }
}
