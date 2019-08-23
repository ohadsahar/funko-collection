import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  email: string;
  favoritePop: string;
  age: number;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getUserDataByToken().subscribe(response => {
      this.email = response.message.email;
      this.favoritePop = response.message.favoritePop;
      this.age = response.message.age;
    });
  }

}
