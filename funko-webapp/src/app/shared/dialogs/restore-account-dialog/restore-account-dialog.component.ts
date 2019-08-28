import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../../../core/services/account.service';
import { MessageService } from '../../../core/services/message.service';

@Component({
  selector: 'app-restore-account-dialog',
  templateUrl: './restore-account-dialog.component.html',
  styleUrls: ['./restore-account-dialog.component.scss']
})
export class RestoreAccountDialogComponent {

  constructor(private accountService: AccountService, private messageService: MessageService) { }
  regExp = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
  restoreAccount(form: NgForm) {
    if (form.invalid && this.regExp.test(form.value.email)) { return; }
    this.accountService.recoverAccount(form.value).subscribe(response => {
      console.log(response);
    }, (error) => {
      this.messageService.failedMessage(JSON.stringify(error));
    });
  }
}
