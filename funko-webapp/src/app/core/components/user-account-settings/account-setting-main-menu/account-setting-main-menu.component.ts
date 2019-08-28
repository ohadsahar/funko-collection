import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-account-setting-main-menu',
  templateUrl: './account-setting-main-menu.component.html',
  styleUrls: ['./account-setting-main-menu.component.scss']
})
export class AccountSettingMainMenuComponent implements OnInit {

  isMobile: boolean;
  constructor(private deviceService: DeviceDetectorService) {
    this.isMobile = false;
  }
  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();
  }

}
