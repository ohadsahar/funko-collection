import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  isMobile: boolean;
  constructor(private deviceService: DeviceDetectorService, private router: Router) {
    this.isMobile = false;
  }
  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();
  }

  navigate(value: string) {
    switch (value) {
      case 'profile':
        this.router.navigate(['user-profile/profile'], { replaceUrl: true });
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
