import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginInterface } from 'src/app/shared/interfaces/login.interface';
import { RegisterInterface } from 'src/app/shared/interfaces/register.interface';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';

const backendUrl = environment.backendUrlUsers;

@Injectable({ providedIn: 'root' })
export class LoginService {
  private authStatusListener = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router, private messageService: MessageService) { }

  register(registerData: RegisterInterface) {
    return this.http.post<{ message: RegisterInterface, success: boolean }>(`${backendUrl}/signup`, registerData);
  }
  login(loginData: LoginInterface) {
    this.http.post<{ message: any }>(`${backendUrl}/login`, loginData).subscribe(response => {
      if (response) {
        localStorage.setItem('token', response.message.accessToken);
        this.authStatusListener.next(true);
        this.dialog.closeAll();
        this.router.navigate(['profile']);
        this.messageService.successMessage('התחברת בהצלחה, מיד תועבר');
      }
    }, (error) => {
      this.messageService.failedMessage(error);
    });
  }
  updateProfileImage(id: string, image: FormData) {
    return this.http.put<{message: any, success: boolean}>(`${backendUrl}/${id}`, image);
  }
  logout() {
    localStorage.removeItem('token');
    this.authStatusListener.next(false);
    this.dialog.closeAll();
    this.router.navigate(['']);
  }
  getUserDataByToken() {
    return this.http.get<{message: any}>(`${backendUrl}/user`);
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
