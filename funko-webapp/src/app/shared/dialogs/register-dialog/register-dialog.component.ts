import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './../../../core/services/login.service';
import { MessageService } from './../../../core/services/message.service';
@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent {

  alreadyExists: string;
  constructor(private loginService: LoginService, private messageService: MessageService) { }

  register(form: NgForm) {
    if (form.invalid) { return; }
    this.loginService.register(form.value).subscribe(response => {
      if (!response.success) {
        this.alreadyExists = 'משתמש זה קיים במערכת';
      } else {
        const loginData = { email: form.value.username, password: form.value.password };
        this.loginService.login(loginData);
        this.messageService.successMessage('התחברת בהצלחה, מיד תועבר');
      }
    }, (error) => {
      this.messageService.failedMessage(error);
    });
  }
}
