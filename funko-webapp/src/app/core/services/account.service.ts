import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const backendUrl = environment.backendUrlAccountSettings;
@Injectable({ providedIn: 'root' })
export class AccountService {

  constructor(private http: HttpClient) { }
  recoverPassword(email: string) {
    return this.http.post<{ message: string }>(`${backendUrl}/recover-password`, email);
  }
}
