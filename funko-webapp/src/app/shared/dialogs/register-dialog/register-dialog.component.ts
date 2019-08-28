import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterInterface } from '../../interfaces/register.interface';
import { LoginService } from './../../../core/services/login.service';
import { MessageService } from './../../../core/services/message.service';
import { UserProfileSettingService } from 'src/app/core/services/user-account-settings.service';
import { PrivacySettings } from '../../interfaces/privacy-settings.interface';
@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})
export class RegisterDialogComponent implements OnInit {

  alreadyExists: string;
  imagePreview: string;
  miniImagePreview: string;
  firstFormGroup: FormGroup;
  userDataForm = new FormData();
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  userData: RegisterInterface = new RegisterInterface('', '', '', '', '', 0, '', 0, '', null, null);
  privacySettings: PrivacySettings = new PrivacySettings(null, false, false, false, false, false, false);
  constructor(private loginService: LoginService, private messageService: MessageService,
    private formBuilder: FormBuilder, private userProfileSettingService: UserProfileSettingService) { }

  ngOnInit() {
    this.onLoadComponent();
  }
  onLoadComponent() {
    this.firstFormGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      age: [null, [Validators.required, Validators.min(6), Validators.max(120)]]
    });
    this.thirdFormGroup = this.formBuilder.group({
      favoritePop: ['', Validators.required],
      numberOfPops: ['', [Validators.required, Validators.min(0), Validators.max(4000)]],
      yearOfStartCollection: ['', Validators.required]
    });
    this.fourFormGroup = this.formBuilder.group({
      image: ['', Validators.required],
      miniImage: ['', Validators.required],
    });
  }
  register() {
    this.createRegisterObject();
    this.loginService.register(this.userDataForm).subscribe(response => {
      if (!response.success) {
        this.alreadyExists = 'משתמש זה קיים במערכת';
      } else {
        const loginData = { email: this.firstFormGroup.value.email.toLowerCase(), password: this.secondFormGroup.value.password };
        this.loginService.login(loginData);
        this.messageService.successMessage('התחברת בהצלחה, מיד תועבר');
      }
    }, (error) => {
      this.messageService.failedMessage(error);
    });
  }
  createRegisterObject() {
    this.userDataForm.append('email', this.firstFormGroup.value.email);
    this.userDataForm.append('firstname', this.firstFormGroup.value.firstname);
    this.userDataForm.append('lastname', this.firstFormGroup.value.lastname);
    this.userDataForm.append('password', this.secondFormGroup.value.password);
    this.userDataForm.append('age', this.secondFormGroup.value.age);
    this.userDataForm.append('favoritePop', this.thirdFormGroup.value.favoritePop);
    this.userDataForm.append('numberOfPops', this.thirdFormGroup.value.numberOfPops);
    this.userDataForm.append('yearOfStartCollection', this.thirdFormGroup.value.yearOfStartCollection);
    this.userDataForm.append('image', this.fourFormGroup.value.image);
    this.userDataForm.append('miniImage', this.fourFormGroup.value.miniImage);
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
