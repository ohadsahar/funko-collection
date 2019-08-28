import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private accountService: AccountService, private messageService: MessageService) { }

  ngOnInit() {
  }
  changePass(form: NgForm) {
    if (form.invalid) { return; }
    this.accountService.updatePassword(form.value).subscribe(() => {
      this.messageService.successMessage('הסיסמא שונתה בהצלחה');
    }, (error) => {
      this.messageService.failedMessage(JSON.stringify(error));
    });
  }
}
