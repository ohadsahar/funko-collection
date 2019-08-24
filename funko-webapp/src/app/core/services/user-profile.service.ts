import { Injectable } from "@angular/core";
import { PrivacySettings } from 'src/app/shared/interfaces/privacy-settings.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const backendUrl = environment.backendUrlSettings;
@Injectable({ providedIn: 'root' })
export class UserProfileService {

  constructor(private http: HttpClient) { }

  createPrivacySettings(privacySettingData: PrivacySettings) {
    return this.http.post<{message: PrivacySettings}>(`${backendUrl}/create-privacy-settings`, privacySettingData);
  }
  updatePrivacySettings(privacySettingsData: PrivacySettings) {
    return this.http.put<{ message: PrivacySettings }>(`${backendUrl}/update-privacy-settings`, privacySettingsData);
  }
  getPrivacySettings() {
    return this.http.get<{message: PrivacySettings}>(`${backendUrl}/get-privacy-settings`);
  }
}
