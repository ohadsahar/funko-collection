import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareDataService } from 'src/app/core/services/share-data.service';
import { RegisterInterface } from '../../../../shared/interfaces/register.interface';
import { LoginService } from '../../../services/login.service';
import { MessageService } from '../../../services/message.service';
import { UserProfileDataService } from '../../../services/user-profile-data.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['../user-profile.component.scss']
})
export class ProfileCardComponent implements OnInit {
  imagePreview: string;
  miniImagePreview: string;
  userData: RegisterInterface;
  backupUserData: RegisterInterface;
  editAble: boolean;
  fourFormGroup: FormGroup;
  userDataForm = new FormData();
  constructor(private loginService: LoginService,
              private shareDataService: ShareDataService, private messageService: MessageService,
              private formBuilder: FormBuilder, private userProfileDataService: UserProfileDataService) { }
  ngOnInit() {
    this.onLoadComponent();
  }
  onLoadComponent() {
    this.loginService.getUserDataByToken().subscribe(response => {
      this.userData = response.message;
      this.shareDataService.changeUser(this.userData);
    }, (error) => {
      this.messageService.failedMessage(error);
    });
    this.fourFormGroup = this.formBuilder.group({
      image: ['', Validators.required],
      miniImage: ['', Validators.required],
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
  beforeEdit() {
    this.backupUserData = Object.assign({}, this.userData);
  }
  cancelEdit() {
    this.userData.email = this.backupUserData.email;
    this.userData.favoritePop = this.backupUserData.favoritePop;
    this.userData.firstname = this.backupUserData.firstname;
    this.userData.lastname = this.backupUserData.lastname;
    this.userData.numberOfPops = this.backupUserData.numberOfPops;
    this.userData.yearOfStartCollection = this.backupUserData.yearOfStartCollection;
    this.afterUpdate();
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
