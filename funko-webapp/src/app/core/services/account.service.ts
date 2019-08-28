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
  updatePassword(password: string) {
    return this.http.put<{message: string}>(`${backendUrl}/change-password`, password);
  }
  freezeAccount() {
    return this.http.put<{message: string}>(`${backendUrl}/freeze-account`, null);
  }
  unfreezeAccount(email: string) {
    return this.http.put<{message: any}>(`${backendUrl}/unfreeze-account`, email);
  }
}
