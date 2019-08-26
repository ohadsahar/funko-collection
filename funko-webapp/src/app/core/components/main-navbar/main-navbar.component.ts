import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { MessageService } from '../../services/message.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor(private loginService: LoginService, private shareDataService: ShareDataService,
              private messageService: MessageService) { }
  fullname: string;

  ngOnInit() {
    this.shareDataService.currentUser.subscribe(response => {
      if (response) {
        this.fullname = response.firstname + ' ' + response.lastname;
      }
    }, (error) => {
      this.messageService.failedMessage(error);
    });
  }
  logout() {
    this.loginService.logout();
  }

}
