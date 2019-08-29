import { Component } from '@angular/core';
import { AccountService } from '../../../core/services/account.service';
import { MessageService } from '../../../core/services/message.service';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-shutdown-account-dialog',
  templateUrl: './shutdown-account-dialog.component.html',
  styleUrls: ['./shutdown-account-dialog.component.scss']
})
export class ShutdownAccountDialogComponent {

  constructor(private accountService: AccountService, private messageService: MessageService,
    private loginService: LoginService) { }

  shutdown() {
    this.accountService.shutdownAccount().subscribe(response => {
      this.loginService.logout();
      this.messageService.successMessage(response.message);
    }, (error) => {
      this.messageService.failedMessage(JSON.stringify(error));
    });
  }
}
