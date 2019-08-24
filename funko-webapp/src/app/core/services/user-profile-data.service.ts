import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterInterface } from '../../shared/interfaces/register.interface';

const backendUrl = environment.backendUrlProfileData;
@Injectable({ providedIn: 'root' })
export class UserProfileDataService {

  constructor(private http: HttpClient) { }
  updateUserData(userData: RegisterInterface) {
    return this.http.put<{ message: RegisterInterface }>(`${backendUrl}/update-user-data`, userData);
  }
}
