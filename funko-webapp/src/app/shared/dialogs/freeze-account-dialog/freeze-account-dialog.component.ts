import { Component } from '@angular/core';
import { AccountService } from '../../../core/services/account.service';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-freeze-account-dialog',
  templateUrl: './freeze-account-dialog.component.html',
  styleUrls: ['./freeze-account-dialog.component.scss']
})
export class FreezeAccountDialogComponent {
  constructor(private accountService: AccountService, private loginService: LoginService) { }
  freezeAccount() {
    this.accountService.freezeAccount().subscribe(response => {
      if (response.message) {
        this.loginService.logout();
      }
    });
  }
}
