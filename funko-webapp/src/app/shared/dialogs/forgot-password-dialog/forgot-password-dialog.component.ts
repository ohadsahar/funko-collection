import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../../../core/services/account.service';

@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.scss']
})
export class ForgotPasswordDialogComponent {

  constructor(private accountService: AccountService) { }
  forgotPassword(form: NgForm) {
    if (form.invalid) { return; }
    this.accountService.recoverPassword(form.value.email).subscribe(response => {
      console.log(response);
    });
  }
}
