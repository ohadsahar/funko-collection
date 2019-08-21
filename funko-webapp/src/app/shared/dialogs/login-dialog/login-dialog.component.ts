import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './../../../core/services/login.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  constructor(private loginService: LoginService) { }
  login(form: NgForm) {
    if (form.invalid) { return; }
    this.loginService.login(form.value);
  }
}
