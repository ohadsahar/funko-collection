import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/core/services/message.service';
import { AccountService } from '../../../core/services/account.service';

@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.scss']
})
export class ForgotPasswordDialogComponent {
  mailAnswer: string;
  constructor(private accountService: AccountService, private messageService: MessageService) { }
  forgotPassword(form: NgForm) {
    if (form.invalid) { return; }

    this.accountService.recoverPassword(form.value).subscribe(response => {
      if (response.message) {
        this.mailAnswer = response.message;
      }
    }, (error) => {
      this.messageService.failedMessage(error);
    });
  }
}
