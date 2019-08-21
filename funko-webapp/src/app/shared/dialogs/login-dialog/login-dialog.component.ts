import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(form: NgForm) {
    if (form.invalid) { return; }
    console.log(form.value);
  }

}
