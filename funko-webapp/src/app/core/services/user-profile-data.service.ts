import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterInterface } from '../../shared/interfaces/register.interface';
import { UserImages } from '../../shared/interfaces/user-images.interface';

const backendUrl = environment.backendUrlProfileData;
@Injectable({ providedIn: 'root' })
export class UserProfileDataService {

  constructor(private http: HttpClient) { }
  uploadUserImagesCollection(imagesData: FormData) {
    return this.http.post<{ message: any }>(`${backendUrl}/upload-user-collection`, imagesData);
  }
  updateUserData(userData: FormData) {
    return this.http.put<{ message: RegisterInterface }>(`${backendUrl}/update-user-data`, userData);
  }
  getAllImages() {
    return this.http.get<{ message: any }>(`${backendUrl}/get-user-images`);
  }
}
