import { Component, OnInit } from '@angular/core';
import { LoginService } from './core/services/login.service';
import { ShareDataService } from './core/services/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLogged: boolean;

  constructor(private loginService: LoginService, private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.loginService.autoAuthUser();
    this.loginService.getAuthStatusListener().subscribe(response => {
      this.isLogged = response;
      if (this.isLogged) {
        this.shareDataService.changeView('עולם ה-Funko');
      }
    });
  }
}
