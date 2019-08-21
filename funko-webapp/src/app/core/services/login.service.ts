import { MessageService } from './message.service';
import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { RegisterInterface } from 'src/app/shared/interfaces/register.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginInterface } from 'src/app/shared/interfaces/login.interface';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

const backendUrl = environment.backendUrlUsers;

@Injectable({ providedIn: 'root' })
export class LoginService {
  private authStatusListener = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router, private messageService: MessageService) { }

  register(registerData: RegisterInterface) {
    return this.http.post<{ message: RegisterInterface, success: boolean }>(`${backendUrl}/signup`, registerData);
  }
  login(loginData: LoginInterface) {
    this.http.post<{ message: string }>(`${backendUrl}/login`, loginData).subscribe(response => {
      if (response.message) {
        localStorage.setItem('token', response.message);
        this.authStatusListener.next(true);
        this.dialog.closeAll();
        this.messageService.successMessage('התחברת בהצלחה, מיד תועבר');
      }
    }, (error) => {
      this.messageService.failedMessage(error);
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.authStatusListener.next(false);
    this.dialog.closeAll();
    this.router.navigate(['']);
  }
  getAuthData() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    return token;
  }
  autoAuthUser() {
    const token = this.getAuthData();
    if (token) {
      this.authStatusListener.next(true);
    }
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
}
