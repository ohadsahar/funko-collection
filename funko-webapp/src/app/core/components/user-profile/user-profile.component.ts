import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RegisterInterface } from '../../../shared/interfaces/register.interface';
import { MessageService } from '../../services/message.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  email: string;
  favoritePop: string;
  age: number;
  userData: RegisterInterface;
  constructor(private loginService: LoginService, private messageService: MessageService,
              private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.loginService.getUserDataByToken().subscribe(response => {
      this.userData = response.message;
      this.shareDataService.changeUser(this.userData);

    }, (error) => {
      this.messageService.failedMessage(error);
    });
  }

}
