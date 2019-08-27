import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeviceDetectorService } from 'ngx-device-detector';
import { LoginDialogComponent } from 'src/app/shared/dialogs/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from 'src/app/shared/dialogs/register-dialog/register-dialog.component';
import { ForgotPasswordDialogComponent } from '../../../../shared/dialogs/forgot-password-dialog/forgot-password-dialog.component';
import { RestoreAccountDialogComponent } from '../../../../shared/dialogs/restore-account-dialog/restore-account-dialog.component';

@Component({
  selector: 'app-login-system-navbar',
  templateUrl: './login-system-navbar.component.html',
  styleUrls: ['./login-system-navbar.component.scss']
})
export class LoginSystemNavbarComponent implements OnInit {
  isMobile: boolean;
  constructor(private dialog: MatDialog, private deviceService: DeviceDetectorService) {
    this.isMobile = false;
  }
  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();
  }
  login() {
    this.dialog.open(LoginDialogComponent);
  }
  register() {
    this.dialog.open(RegisterDialogComponent);
  }
  forgotPassword() {
    this.dialog.open(ForgotPasswordDialogComponent);
  }
  restoreAccount() {
    this.dialog.open(RestoreAccountDialogComponent);
  }
}
