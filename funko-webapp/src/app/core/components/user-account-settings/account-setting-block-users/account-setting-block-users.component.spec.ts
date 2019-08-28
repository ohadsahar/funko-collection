import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountSettingRecoverySettingsComponent } from './account-setting-block-users.component';


describe('AccountSettingRecoverySettingsComponent', () => {
  let component: AccountSettingRecoverySettingsComponent;
  let fixture: ComponentFixture<AccountSettingRecoverySettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettingRecoverySettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingRecoverySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
