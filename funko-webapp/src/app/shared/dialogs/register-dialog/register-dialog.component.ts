import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterInterface } from '../../interfaces/register.interface';
import { LoginService } from './../../../core/services/login.service';
import { MessageService } from './../../../core/services/message.service';
import { UserProfileService } from 'src/app/core/services/user-profile.service';
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
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  userData: RegisterInterface = new RegisterInterface('', '', '', '', 0, '', 0);
  privacySettings: PrivacySettings = new PrivacySettings(null, false, false, false, false, false, false);
  constructor(private loginService: LoginService, private messageService: MessageService,
    private formBuilder: FormBuilder, private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.onLoadComponent();
  }

  onLoadComponent() {
    this.firstFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      password: ['', Validators.required],
      age: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      favoritePop: ['', Validators.required],
      numberOfPops: ['', Validators.required]
    });
  }
  register() {
    this.createRegisterObject();
    this.loginService.register(this.userData).subscribe(response => {
      if (!response.success) {
        this.alreadyExists = 'משתמש זה קיים במערכת';
      } else {
        const loginData = { email: this.userData.email.toLowerCase(), password: this.userData.password };
        this.loginService.login(loginData);
        this.userProfileService.createPrivacySettings(this.privacySettings).subscribe(() => {
          this.messageService.successMessage('התחברת בהצלחה, מיד תועבר');
        });

      }
    }, (error) => {
      this.messageService.failedMessage(error);
    });
  }
  createRegisterObject() {
    this.userData.email = this.firstFormGroup.value.email;
    this.userData.firstname = this.firstFormGroup.value.firstname;
    this.userData.lastname = this.firstFormGroup.value.lastname;
    this.userData.password = this.secondFormGroup.value.password;
    this.userData.age = this.secondFormGroup.value.age;
    this.userData.favoritePop = this.thirdFormGroup.value.favoritePop;
    this.userData.numberOfPops = this.thirdFormGroup.value.numberOfPops;
  }
}
