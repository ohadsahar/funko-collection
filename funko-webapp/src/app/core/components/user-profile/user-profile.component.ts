import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FreezeAccountDialogComponent } from '../../../shared/dialogs/freeze-account-dialog/freeze-account-dialog.component';
import { ShutdownAccountDialogComponent } from '../../../shared/dialogs/shutdown-account-dialog/shutdown-account-dialog.component';
import { PrivacySettings } from '../../../shared/interfaces/privacy-settings.interface';
import { RegisterInterface } from '../../../shared/interfaces/register.interface';
import { LoginService } from '../../services/login.service';
import { MessageService } from '../../services/message.service';
import { ShareDataService } from '../../services/share-data.service';
import { UserProfileDataService } from '../../services/user-profile-data.service';
import { UserProfileSettingService } from '../../services/user-profile-settings.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  email: string;
  favoritePop: string;
  age: number;
  imagePreview: string;
  miniImagePreview: string;
  freezeAccount: boolean;
  shutdownAccount: boolean;
  userData: RegisterInterface;
  userDataForm = new FormData();
  backupUserData: RegisterInterface;
  editAble: boolean;
  fourFormGroup: FormGroup;
  privacySettings: PrivacySettings = new PrivacySettings(null, false, false, false, false, false, false);
  constructor(private loginService: LoginService, private messageService: MessageService,
    private shareDataService: ShareDataService, private userProfileSettingService: UserProfileSettingService,
    private userProfileDataService: UserProfileDataService, private dialog: MatDialog, private formBuilder: FormBuilder) {
    this.editAble = false;

  }

  ngOnInit() {
    this.onLoadComponent();
  }
  onLoadComponent() {
    this.loginService.getUserDataByToken().subscribe(response => {
      this.userData = response.message;
      this.userProfileSettingService.createPrivacySettings(this.privacySettings).subscribe(() => {
      });
      this.userProfileSettingService.getPrivacySettings().subscribe(data => {
        this.privacySettings = data.message;
      });
      this.shareDataService.changeUser(this.userData);
    }, (error) => {
      this.messageService.failedMessage(error);
    });
    this.fourFormGroup = this.formBuilder.group({
      image: ['', Validators.required],
      miniImage: ['', Validators.required],
    });
  }
  updateProfile() {
    this.validateImagesExists();
    this.createObjectForUpdateUserData();
    this.userProfileDataService.updateUserData(this.userDataForm).subscribe(response => {
      this.userData = response.message;
      this.afterUpdate();
    }, (error) => {
      this.messageService.failedMessage(JSON.stringify(error));
    });
  }
  beforeEdit() {
    this.backupUserData = Object.assign({}, this.userData);
  }
  cancelEdit() {
    this.userData.email = this.backupUserData.email;
    this.userData.favoritePop = this.backupUserData.favoritePop;
    this.userData.firstname = this.backupUserData.firstname;
    this.userData.lastname = this.backupUserData.lastname;
    this.userData.numberOfPops = this.backupUserData.numberOfPops;
  }
  updateSettings() {
    this.userProfileSettingService.updatePrivacySettings(this.privacySettings).subscribe(response => {
      this.privacySettings = response.message;
      this.messageService.successMessage('הגדרות עודכנו בהצלחה');
    }, (error) => {
      this.messageService.failedMessage(JSON.stringify(error));
    });
  }
  freezeAccountDialog() {
    const dialog = this.dialog.open(FreezeAccountDialogComponent);
    dialog.afterClosed().subscribe(response => {
      if (response === undefined || response === false) {
        this.freezeAccount = false;
      }
    });
  }
  shutDownAccountDialog() {
    const dialog = this.dialog.open(ShutdownAccountDialogComponent);
    dialog.afterClosed().subscribe(response => {
      if (response === undefined || response === false) {
        this.shutdownAccount = true;
      }
    });
  }
  createObjectForUpdateUserData() {
    this.userDataForm.append('id', this.userData.id);
    this.userDataForm.append('email', this.userData.email);
    this.userDataForm.append('firstname', this.userData.firstname);
    this.userDataForm.append('lastname', this.userData.lastname);
    this.userDataForm.append('password', this.userData.password);
    this.userDataForm.append('age', this.userData.age as any);
    this.userDataForm.append('favoritePop', this.userData.favoritePop);
    this.userDataForm.append('numberOfPops', this.userData.numberOfPops as any);
    this.userDataForm.append('yearOfStartCollection', this.userData.yearOfStartCollection);
    this.userDataForm.append('profileImage', this.fourFormGroup.value.image);
    this.userDataForm.append('miniImage', this.fourFormGroup.value.miniImage);
  }
  validateImagesExists() {
    if (!this.fourFormGroup.value.miniImage) {
      this.fourFormGroup.value.miniImage = this.userData.miniImage;
    }
    if (!this.fourFormGroup.value.image) {
      this.fourFormGroup.value.image = this.userData.profileImage;
    }
  }
  afterUpdate() {
    this.userDataForm = new FormData();
    this.imagePreview = '';
    this.miniImagePreview = '';
  }
  onProfileImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.fourFormGroup.patchValue({ image: file });
    this.fourFormGroup.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  onMiniProfileImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.fourFormGroup.patchValue({ miniImage: file });
    this.fourFormGroup.get('miniImage').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.miniImagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
