import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  isMobile: boolean;
  constructor(private deviceService: DeviceDetectorService, private loginService: LoginService) {
    this.isMobile = false;
  }
  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();
  }

  logout() {
    this.loginService.logout();
  }

  profile() { }


}
