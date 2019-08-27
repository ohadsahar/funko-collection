import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-restore-account-dialog',
  templateUrl: './restore-account-dialog.component.html',
  styleUrls: ['./restore-account-dialog.component.scss']
})
export class RestoreAccountDialogComponent {

  regExp = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
  restoreAccount(form: NgForm) {
    if (form.invalid && this.regExp.test(form.value.email)) { return; }
    console.log(form.value);
  }

}
